<template>
  <div class="bg-complementary h-2 w-100 rounded-md overflow-hidden">
    <div
      class="bg-secondary h-2 rounded-md"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
    },
  },
});
</script>
