<template>
  <div class="flex">
    <button
      v-for="locale in locales"
      :key="locale"
      @click="changeLocale(locale)"
      class="ml-6 first:ml-0 uppercase font-medium flex animate-underline-tertiary"
      :class="{ 'text-tertiary': currentLocale === locale }"
      :aria-label="$t(`aria.${locale}`)"
    >
      {{ locale }}
    </button>
  </div>
</template>

<script lang="ts">
import { useChangeLocale } from "@/hooks";
import { Locale } from "@/types";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "LanguageSwitch",
  setup() {
    const { changeLocale, currentLocale } = useChangeLocale();

    const locales = computed(() => {
      return Object.values(Locale);
    });

    return { changeLocale, locales, currentLocale };
  },
});
</script>
