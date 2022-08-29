<template>
  <Section id="hero" class="bg-primary text-white flex">
    <Container
      class="flex-1 flex flex-col items-center justify-between mt-4 mb-10 md:my-12 lg:my-16"
    >
      <Heading1 class="flex flex-col">
        <span class="text-tertiary mb-4 text-2xl font-semibold font-chakra">{{
          greetingsDest
        }}</span>
        <span class="font-chakra">{{ fullNameDest }}</span>
      </Heading1>
      <NarrowContainer class="my-8 md:my-12">
        <p
          v-if="!loading"
          class="text-complementary text-lg font-medium text-center animate-fade"
        >
          {{ $t("hero.description") }}
        </p>
      </NarrowContainer>
      <a
        v-if="!loading"
        class="block bg-tertiary hover:bg-opacity-80 duration-500 text-white font-semibold px-8 py-4 rounded-md max-w-xs animate-fade"
        href="#about"
      >
        <span class="mr-4">
          {{ $t("hero.button") }}
        </span>
        <FontAwesomeIcon icon="fa-solid fa-chevron-up" :rotation="180" />
      </a>
    </Container>
  </Section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import {
  Container,
  Section,
  Heading1,
  NarrowContainer,
} from "@/components/layout";
import { useI18n } from "vue-i18n";
import { useChangeLocale } from "@/hooks";

export default defineComponent({
  name: "Hero",
  components: { Container, Section, Heading1, NarrowContainer },
  setup() {
    const { t } = useI18n();
    const { currentLocale } = useChangeLocale();
    const greetingsSrc = ref(t("hero.greetings"));
    const fullNameSrc = ref(t("hero.fullName"));
    const greetingsDest = ref("");
    const fullNameDest = ref("");
    const loading = ref(true);

    const greetingsTyping = () => {
      if (greetingsDest.value.length < greetingsSrc.value.length) {
        greetingsDest.value += greetingsSrc.value.charAt(
          greetingsDest.value.length
        );
        setTimeout(greetingsTyping, 75);
      } else {
        setTimeout(fullNameTyping, 200);
      }
    };

    const fullNameTyping = () => {
      if (fullNameDest.value.length < fullNameSrc.value.length) {
        fullNameDest.value += fullNameSrc.value.charAt(
          fullNameDest.value.length
        );
        setTimeout(fullNameTyping, 75);
      } else {
        loading.value = false;
      }
    };

    setTimeout(greetingsTyping, 200);

    watch(
      currentLocale,
      () => {
        greetingsSrc.value = t("hero.greetings");
        fullNameSrc.value = t("hero.fullName");
        greetingsDest.value = "";
        fullNameDest.value = "";
        loading.value = true;
        greetingsTyping();
      },
      { deep: true }
    );

    return { greetingsDest, fullNameDest, loading };
  },
});
</script>

<style lang="scss" scoped>
#hero {
  min-height: calc(100vh - 96px);
}
</style>
