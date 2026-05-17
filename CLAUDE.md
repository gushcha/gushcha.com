# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server with Turbopack
yarn build        # Production build
yarn lint         # ESLint
yarn extract-strings <namespace> <component>  # Extract hardcoded strings into a dictionary file
```

No test runner is configured.

## Architecture Overview

**gushcha.com** is a Next.js 15 / React 19 multi-tenant personal website where each family member (`denis`, `grigory`, `family`) is served from a different subdomain (`denis.gushcha.com`, `grigory.gushcha.com`, `family.gushcha.com`). A single Next.js deployment serves all members; the active member is resolved from the `Host` header at request time.

### Multi-tenant routing

`src/proxy.ts` (the Next.js middleware) intercepts every request. It:
1. Parses the `Host` header to detect which member subdomain is active.
2. Picks the correct locale list for that member.
3. Redirects or rewrites to add the locale prefix (`/en/`, `/ru/`, `/el/`) when missing.

`src/hooks/getMemberArtifactByHost/` provides two helpers used everywhere:
- `getMemberArtifactByHost` — client/shared, reads `window.location.host`.
- `getMemberArtifactByHostServer` — server only, reads Next.js `headers()`.

Both accept a `HostPrefixToArtefactMap<T>` (`{ family, denis, grigory }`) and return the artifact matching the active subdomain. This pattern is how layouts, metadata generators, locale lists, and sitemap config are all dispatched per-member.

The root layout at `src/app/[locale]/layout.tsx` uses this to pick `DenisLayout`, `GrigoryLayout`, or `FamilyLayout` at runtime — one codebase, three experiences.

### Members and locales

- Defined in `src/constants/members.ts` (`MEMBERS` array) and `src/constants/locales.ts`.
- Each member has its own supported locale list; `family` gets the union of all locales.
- Adding a new member requires: adding to `MEMBERS`, adding its locale list to `localesByParticularMember`, creating a layout component, wiring it into `getMemberArtifactByHostServer` calls in layout/sitemap/metadata, and adding it to `BACKGROUNDS`.

### Internationalization (i18n)

Dictionaries live in `dictionaries/` as JS modules named `<namespace>.<locale>.js` (e.g. `denis.en.js`). They export a flat `Record<string, string>` with `{placeholder}` syntax for interpolation (via `string-template`).

**Server components** use `getT(namespace, supportedLocales?)` from `src/hooks/useT/getT.ts`. It reads the locale from React's `cache()` (set by `withLocalizationPage` HOC).

**Client components** use `useT(namespace, supportedLocales)` from `src/hooks/useT/useT.ts`. It reads the locale from the URL via `useParams`, fetches the dictionary lazily, and caches it in `ContextDictionary` (provided at root by `ContextDictionaryProvider`).

Both call `tAbstract(dictionary, key, values?)` for actual translation. Missing keys throw a deferred error and return the key as fallback.

**Locale is set per-request** via `src/cache/cacheLocale.ts` which wraps React `cache()`. Every page must be wrapped with `withLocalizationPage` (pages) or `withLocalizationMetadata` (metadata generators) to set the locale before any `getT` call.

`withLocalizationMetadata` also automatically injects `canonical` and `alternates.languages` into every page's metadata.

To add a new dictionary namespace:
1. Add the name to `DICTIONARY_NAMES` in `src/constants/dictionaryNames.ts`.
2. Create `dictionaries/<namespace>.<locale>.js` for each supported locale.
3. Use `getT` or `useT` with the new namespace name.

### Skill stubs (`.agent/skills/`)

Three empty directories exist from a previous Copilot setup: `create_new_route`, `extract_i18n_strings`, `lint_code`. They have no content and can be populated with Claude Code skills (markdown files following the Claude Code skill format).
