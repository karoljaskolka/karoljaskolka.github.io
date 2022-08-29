<template>
  <h1 class="text-4xl font-bold text-center font-chakra">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Heading1",
});
</script>
