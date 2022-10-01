<template>
  <Section id="hero" class="bg-primary text-complementary flex">
    <Container
      class="flex-1 flex flex-col items-center justify-between mt-4 mb-10 md:my-12 lg:my-16"
    >
      <div class="flex flex-col">
        <div class="flex justify-center items-center mb-4">
          <span class="text-tertiary text-2xl font-semibold font-chakra mr-2">
            {{ greetingsDest }}
          </span>
          <span
            v-if="loadingGreetings"
            class="block w-2 h-6 animate-caret-tertiary"
          ></span>
        </div>
        <div class="flex items-center">
          <Heading1 class="font-chakra mr-2">
            {{ fullNameDest }}
          </Heading1>
          <span
            v-if="loadingFullName"
            class="block w-2 h-10 animate-caret"
          ></span>
        </div>
      </div>
      <NarrowContainer class="my-8 md:my-12">
        <p
          v-if="!loadingFullName && !loadingGreetings"
          class="text-lg font-medium text-center animate-fade"
        >
          {{ $t("hero.description") }}
        </p>
      </NarrowContainer>
      <a
        v-if="!loadingFullName && !loadingGreetings"
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
    const loadingGreetings = ref(true);
    const loadingFullName = ref(false);

    const greetingsTyping = () => {
      if (greetingsDest.value.length < greetingsSrc.value.length) {
        greetingsDest.value += greetingsSrc.value.charAt(
          greetingsDest.value.length
        );
        setTimeout(greetingsTyping, 100);
      } else {
        setTimeout(() => {
          loadingGreetings.value = false;
          loadingFullName.value = true;
          fullNameTyping();
        }, 250);
      }
    };

    const fullNameTyping = () => {
      if (fullNameDest.value.length < fullNameSrc.value.length) {
        fullNameDest.value += fullNameSrc.value.charAt(
          fullNameDest.value.length
        );
        setTimeout(fullNameTyping, 100);
      } else {
        setTimeout(() => {
          loadingFullName.value = false;
        }, 250);
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
        loadingGreetings.value = true;
        loadingFullName.value = false;
        greetingsTyping();
      },
      { deep: true }
    );

    return { greetingsDest, fullNameDest, loadingGreetings, loadingFullName };
  },
});
</script>

<style lang="scss" scoped>
#hero {
  min-height: calc(100vh - 92px);
}
</style>
