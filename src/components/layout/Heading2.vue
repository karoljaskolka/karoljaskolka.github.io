<template>
  <h2
    class="text-4xl font-bold font-chakra text-secondary flex flex-col justify-center items-center invisible"
    ref="heading"
  >
    <FontAwesomeIcon v-if="icon" :icon="icon" class="mb-4" />
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import { useOnScrollTransition } from "@/hooks";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Heading2",
  props: {
    icon: String,
  },
  setup() {
    const heading = ref([]);

    useOnScrollTransition(heading, "animate-scroll-fade");

    return { heading };
  },
});
</script>
