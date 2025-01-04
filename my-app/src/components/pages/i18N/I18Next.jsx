import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Подключаем загрузку переводов из файлов
  .use(LanguageDetector) // Определение языка пользователя
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Включить отладку (удалите в продакшне)
    interpolation: {
      escapeValue: false, // React уже экранирует строки
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам переводов
    },
  });

export default i18n;
