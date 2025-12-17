'use client'
import {STORAGE_KEY, THEME, PREFERS_COLOR_THEME_MEDIA_QUERY} from '@/components/shared/theme/constants/theme';
import { use, useEffect } from 'react';

const noFlash = `!function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var m=window.matchMedia('${PREFERS_COLOR_THEME_MEDIA_QUERY}').matches;var t=s|| (m?'${THEME.dark}':'${THEME.light}');if(t==='${THEME.dark}')document.documentElement.classList.add('${THEME.dark}');}catch(e){}}();`;
/**
 * Must be included at the top of the HTML document to prevent flickering
 * @returns A script tag that initializes the theme without flickering.
 */
const ThemeAntiFlicker: React.FC = () => {
  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEY);
    const systemPrefersDark = window.matchMedia(PREFERS_COLOR_THEME_MEDIA_QUERY).matches;
    const actualTheme = theme || (systemPrefersDark ? THEME.dark : THEME.light);
    if (actualTheme === THEME.dark) {
      document.documentElement.classList.add(THEME.dark);
    } else {
      document.documentElement.classList.remove(THEME.dark);
    }
  });
  return <script
    id="no_flash"
    dangerouslySetInnerHTML={{ __html: noFlash }}
  />
}

export default ThemeAntiFlicker;