import { useI18n } from "vue-i18n";
import { Locale } from "@/types";

export const useChangeLocale = () => {
  const i18n = useI18n();

  const changeLocale = (locale: Locale) => {
    i18n.locale.value = locale;
    document.documentElement.setAttribute("lang", locale);
    window.localStorage.setItem("locale", locale);
  };

  return { changeLocale };
};
