import { useI18n } from "vue-i18n";
import { Locale } from "@/types";
import { computed } from "vue";

export const useChangeLocale = () => {
  const i18n = useI18n();

  const currentLocale = computed(() => {
    return i18n.locale.value;
  });

  const changeLocale = (locale: Locale) => {
    i18n.locale.value = locale;
    document.documentElement.setAttribute("lang", locale);
    window.localStorage.setItem("locale", locale);
  };

  return { changeLocale, currentLocale };
};
