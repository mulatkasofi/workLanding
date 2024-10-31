import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "../public/locales/ru/translation.json";
import translationEN from "../public/locales/en/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: "en",
  fallbackLng: "en",
  detection: {
    order: ["cookie", "localStorage", "navigator"],
    lookupQuerystring: "lng",
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
