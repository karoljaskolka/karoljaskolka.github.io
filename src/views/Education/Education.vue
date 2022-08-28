<template>
  <Section id="education" :border="true">
    <Container>
      <Heading2 icon="fa-solid fa-graduation-cap" class="pb-12">
        {{ $t("education.header") }}
      </Heading2>
      <Timeline :entities="entities" />
    </Container>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container, Section, Heading2 } from "@/components/layout";
import { Timeline } from "@/components/common";
import { useContent } from "@/hooks";

export default defineComponent({
  name: "Education",
  components: { Container, Section, Heading2, Timeline },
  setup() {
    const { degrees } = useContent();

    return { entities: degrees };
  },
});
</script>
