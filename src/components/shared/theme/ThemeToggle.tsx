"use client";
import { PREFERS_COLOR_THEME_MEDIA_QUERY, THEME, STORAGE_KEY } from './constants/theme';

const  getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return THEME.light;
  }
  return window.matchMedia(PREFERS_COLOR_THEME_MEDIA_QUERY)
    .matches 
    ? THEME.dark 
    : THEME.light
}

const getActualTheme = () => {
  if (typeof document !== 'undefined' 
      && document.documentElement.classList.contains(THEME.dark)
  ) {
    return THEME.dark
  }
  return THEME.light
}

/**
 * Button which toggles the theme between light and dark modes.
 * On click if the theme differs from system, it will be saved in localStorage.
 */
const ThemeToggle = () => {

  const handleThemeChange = () => {
    const root = document.documentElement;
    const themeToToggle = getActualTheme() === THEME.dark 
      ? THEME.light 
      : THEME.dark
    
    if(themeToToggle=== THEME.dark) {
      root.classList.add(THEME.dark);
    } else {
      root.classList.remove(THEME.dark);
    }

    if(themeToToggle === getSystemTheme()) {
      localStorage.removeItem(STORAGE_KEY);
      return
    }
    localStorage.setItem(STORAGE_KEY, themeToToggle);
  }

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-white dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      <span className="h-4 w-4 relative">
        <span className="absolute inset-0 rotate-0 scale-100 dark:scale-0 transition-transform origin-center">☀️</span>
        <span className="absolute inset-0 scale-0 dark:scale-100 transition-transform origin-center">🌙</span>
      </span>
      <span>change</span>
    </button>
  );
};

export default ThemeToggle;
