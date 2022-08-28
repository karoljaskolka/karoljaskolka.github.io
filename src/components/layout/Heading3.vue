<template>
  <h3 class="text-2xl text-tertiary font-semibold">
    <slot></slot>
  </h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Heading3",
});
</script>
