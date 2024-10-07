import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      backend: {
        loadPath: `${process.env.NEXT_PUBLIC_BASE_URL}/locales/{{lng}}/{{ns}}.json`,
      },
    },
  });

export default i18n;
