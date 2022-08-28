<template>
  <h2
    class="text-4xl font-bold text-secondary font-chakra flex flex-col justify-center items-center"
  >
    <FontAwesomeIcon v-if="icon" :icon="icon" class="mb-4" />
    <span>
      <slot></slot>
    </span>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Heading2",
  props: {
    icon: String,
  },
});
</script>
