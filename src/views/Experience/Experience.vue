<template>
  <Section id="experience" :border="true">
    <Container>
      <Heading2 icon="fa-solid fa-briefcase" class="pb-12">
        {{ $t("experience.header") }}
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
  name: "Experience",
  components: { Container, Section, Heading2, Timeline },
  setup() {
    const { jobs } = useContent();

    return { entities: jobs };
  },
});
</script>
