<template>
  <article>
    <Heading3 class="my-8 md:text-center" :animation="true">
      {{ article.heading }}
    </Heading3>
    <div class="flex flex-wrap justify-center -m-6">
      <div
        v-for="subarticle in article.subarticles"
        :key="subarticle.subheading"
        class="w-full md:w-1/2 lg:w-1/3"
      >
        <article class="m-6 invisible" ref="skills">
          <Heading4 class="mb-6 md:text-center">
            {{ subarticle.subheading }}
          </Heading4>
          <Skill
            v-for="skill in subarticle.skills"
            :key="skill.name"
            class="mb-5"
            :skill="skill"
          />
        </article>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Heading3, Heading4 } from "@/components/layout";
import { useOnScrollTransition } from "@/hooks";
import { SkillArticleDto } from "@/types";
import { defineComponent, PropType, ref } from "vue";
import { Skill } from ".";

export default defineComponent({
  name: "SkillArticle",
  components: { Heading3, Heading4, Skill },
  props: {
    article: {
      type: Object as PropType<SkillArticleDto>,
    },
  },
  setup() {
    const skills = ref([]);

    useOnScrollTransition(skills, "animate-scroll-left");

    return { skills };
  },
});
</script>
