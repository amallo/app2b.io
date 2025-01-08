import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    setLanguage(browserLang === 'fr' ? 'fr' : 'en');
  }, []);

  return language;
} 