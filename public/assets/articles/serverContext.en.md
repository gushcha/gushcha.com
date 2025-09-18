# React Server Components Context

tldr: use [react cache](https://react.dev/reference/react/cache).

You might think it's not what you need, but it probably is.

## How it's done on client

Lets Imagine you need to store the locale in a context, so you would have sort of following files

### The context
```js
// LocaleContext.js

export default createContext(null);
```

### The wrapper with provider
```jsx
// App.js

const expensiveComputationOfLocale = 
  () => Promise.resolve('en')


function App() {
  const [locale, setLocale] = useState();
  
  useEffect(() => { 
    expensiveComputationOfLocale()
      .then(setLocale) 
    }, [])


  return <LocaleContext.Provider 
      value={{locale, setLocale}}
    >
      <DeeplyNestedComponent />
      <LocaleSwitcher/>
      
    </LocaleContext.Provider>
}
```

### And a type of consumer
```js
// DeeplyNestedComponent.js

function DeeplyNestedComponent() {
  const { locale } = useContext(LocaleContext);
  
  return <div>Current locale: {locale}</div>
}
```

Within the `Context.Provider` usually you can put a component to change the provided value.

### Component that modifies the value provided
```js
// LocaleSwitcher.js

const LocaleSwitcher = () => {
  const { 
    locale,
    setLocale,
  } = useContext(LocaleContext);

  const next = locale === 'en' ? 'el' : 'en';

  const handleClick = () => setLocale(next)

  return <button onClick={handleClick} >
    set {next}
  </button>
};
```

When you click the button you will change the value in LocaleContext.Provider. Which in its term will trigger **rerender** in all components consuming this context e. g. `DeeplyNestedComponent`

In server components and generally ssr rerendering is not possible/desirable. And that is the reason why React.Context is not applicable in React server components.

**Components that consume the context do not rerender on server**

## How it's done on server
As mentioned above `React.Context` is not useful on server because consumer components won't track it's changes.

You might think why not use provider with static immutable value. Just to avoid overwhelming the tree with passing props to deeply nested component.

This is exactly when react cache becomes handy.

### The ~~context~~ cache

```js
import {cache} from 'react'

//getLocaleCache.js

function getLocale () {
  return { locale: null }
}

const getLocaleCache = cache(getLocale)

export default getLocaleCache
```

In the first component being rendered you determine your locale and cache it.

So the naive approach is to find the first use of locale and cache it.

### The wrapper ~~with provider~~ that caches
```jsx
// App.js

const expensiveComputationOfLocale =
  () => Promise.resolve(Math.random() < 0.5 ? 'en' : 'el')

export default async function App () {
  const localeCache = getLocaleCache()
  
  //Following line puts the locale to cache
  localeCache.locale = await expensiveComputationOfLocale()

  return (
    <div>
       <DeeplyNestedComponent />
    </div>
  );
};
```


The next components are able to use this cached value.

> \* React approach presumes that correct way is 
to determine locale each time when it is needed, 
and use the cache to reclaim memoized value 
if determination runs second and on times.
So basically this is a hack

### And a type of cache consumer
```jsx

// DeeplyNestedComponent.js

export default function DeeplyNestedComponent() {
  const { locale } = getLocaleCache()
  
  return <div>Current locale: {locale}</div>
}
```

If you are curious about where is the `LocaleSwitcher.js` for server. It cannot be used within server components, only using the client components as it's main purpose to change value stored for the context.

## Caveats
- Most importantly: cache scope depends on your renderer/runtime. If the renderer creates a fresh React render context per request (usually its done in this way, for example nextjs page rendering). If the renderer or process reuses the same renderer/context, cached values may be reused across requests and can cause cross-request leakage.

- React cache is not completely stable and might change in future releases,
as many other features in React server components.

- It's worth noting that React's server cache isn't available in client components. 
To pass data to deeply nested components you'll have to use both approaches: `cache` for server and `Context.Provider` for client.
And there is a possibility to mix `Context.Provider` with server components. But it's whole another story.
