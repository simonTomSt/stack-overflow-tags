import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '@/lib/locales/en/locale.json';
import translationPL from '@/lib/locales/pl/locale.json';

const resources = {
  en: {
    main: translationEN,
  },
  pl: {
    main: translationPL,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
});

export default i18next;
