<template>
  <footer class="bg-primary">
    <Container>
      <Section class="md:flex md:justify-between md:items-stretch">
        <nav class="flex flex-col text-white mb-12 md:mb-0">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            class="mb-4 last:mb-0 hover:text-gray w-fit flex animate-underline-thin-tertiary"
            :aria-label="link.aria"
          >
            {{ link.label }}
          </a>
        </nav>
        <aside class="md:flex md:flex-col md:justify-between">
          <div class="mb-12 text-white">
            <a
              :href="$t('contact.email.url')"
              target="_blank"
              rel="noopener noreferrer"
              class="flex md:flex-row-reverse items-center w-fit hover:text-gray animate-underline-thin-tertiary"
              :aria-label="$t('contact.email.aria')"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-envelope"
                class="mr-4 md:mr-0"
              />
              <span class="mr-0 md:mr-4">
                {{ $t("contact.email.label") }}
              </span>
            </a>
          </div>
          <div class="flex text-white md:justify-end">
            <a
              :href="$t('contact.linkedin.url')"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-gray mr-4"
              :aria-label="$t('contact.linkedin.aria')"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
              <span class="hidden">
                {{ $t("contact.linkedin.label") }}
              </span>
            </a>
            <a
              :href="$t('contact.github.url')"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-gray"
              :aria-label="$t('contact.github.aria')"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
              <span class="hidden">
                {{ $t("contact.github.label") }}
              </span>
            </a>
          </div>
        </aside>
      </Section>
      <div class="text-white text-center pb-4 text-sm">
        <span> &copy; 2022 Karol Jaskółka </span>
      </div>
    </Container>
  </footer>
  <div class="h-16 lg:h-0 bg-primary"></div>
</template>

<script lang="ts">
import { useContent } from "@/hooks";
import { defineComponent } from "vue";
import { Container, Section } from "@/components/layout";

export default defineComponent({
  name: "Footer",
  components: { Section, Container },
  setup() {
    const { links } = useContent();

    return { links };
  },
});
</script>
