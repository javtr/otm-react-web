import { createContext } from 'react';

const LanguageContext = createContext({
  lang: 'es',
  setLang: () => {},
});

export default LanguageContext;