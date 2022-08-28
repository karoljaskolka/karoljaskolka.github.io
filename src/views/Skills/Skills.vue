<template>
  <Section id="skills">
    <Container>
      <Heading2 icon="fa-solid fa-code" class="mb-12">
        {{ $t("skills.header") }}
      </Heading2>
      <SkillArticle
        v-for="(entity, index) in entities"
        :key="entity.heading"
        :class="{ 'mb-12': index < entities.length - 1 }"
        :article="entity"
      />
    </Container>
  </Section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container, Section, Heading2 } from "@/components/layout";
import { SkillArticle } from "./components";
import { useContent } from "@/hooks";

export default defineComponent({
  name: "Skills",
  components: { Container, Section, Heading2, SkillArticle },
  setup() {
    const { articles } = useContent();

    return { entities: articles };
  },
});
</script>

<style lang="scss" scoped></style>
