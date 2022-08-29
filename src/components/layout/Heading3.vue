<template>
  <h3
    class="text-2xl text-tertiary font-semibold"
    :class="{ invisible: animation }"
    ref="heading"
  >
    <slot></slot>
  </h3>
</template>

<script lang="ts">
import { useOnScrollTransition } from "@/hooks";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Heading3",
  props: {
    animation: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const heading = ref([]);

    if (props.animation) useOnScrollTransition(heading, "animate-scroll-right");

    return { heading };
  },
});
</script>
