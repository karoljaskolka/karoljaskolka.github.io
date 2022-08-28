<template>
  <div>
    <div class="flex justify-between items-center mb-2">
      <div class="flex items-center">
        <FontAwesomeIcon
          v-if="skill.icon"
          :icon="skill.icon"
          size="2x"
          class="mr-4 w-5 h-5 text-secondary"
        />
        <span v-else class="w-9"></span>
        <span class="text-primary mr-4">
          {{ skill.name }}
        </span>
      </div>
      <Note class="text-right">
        {{ skill.experience }}
      </Note>
    </div>
    <ProgressBar :progress="skill.progress" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProgressBar from "./ProgressBar.vue";
import { Note } from "@/components/layout";
import { SkillDto } from "@/types";

export default defineComponent({
  name: "Skill",
  components: { ProgressBar, Note },
  props: {
    skill: {
      type: Object as PropType<SkillDto>,
    },
  },
});
</script>
