<template>
  <Section id="about" :border="true">
    <Container>
      <Heading2 class="mb-12">
        {{ $t("about.header") }}
      </Heading2>
      <NarrowContainer class="md:flex md:items-center mb-12">
        <Photo class="md:w-1/2 md:pr-6 mb-12 md:mb-0" />
        <ContactList class="md:w-1/2 md:pl-6" :entities="entities" />
      </NarrowContainer>
      <NarrowContainer>
        <Paragraph>
          <span class="block invisible" ref="description">
            {{ $t("about.description") }}
          </span>
        </Paragraph>
      </NarrowContainer>
    </Container>
  </Section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Container,
  Section,
  Heading2,
  Paragraph,
  NarrowContainer,
} from "@/components/layout";
import { Photo, ContactList } from "./components";
import { useContent, useOnScrollTransition } from "@/hooks";

export default defineComponent({
  name: "About",
  components: {
    Container,
    Section,
    Heading2,
    Paragraph,
    Photo,
    NarrowContainer,
    ContactList,
  },
  setup() {
    const { contacts } = useContent();
    const description = ref([]);

    useOnScrollTransition(description, "animate-scroll-top");

    return { entities: contacts, description };
  },
});
</script>
