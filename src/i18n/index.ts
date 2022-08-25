import { Locale } from "@/types";
import { createI18n } from "vue-i18n";

import en from "./en/translation.json";
import pl from "./pl/translation.json";

const LOCALES: string[] = Object.values(Locale);

const getLocale = () => {
  const locale = window.localStorage.getItem("locale") || "";
  return LOCALES.includes(locale) ? locale : Locale.EN;
};

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: Locale.EN,
  globalInjection: true,
  messages: {
    en,
    pl,
  },
});

export default i18n;
