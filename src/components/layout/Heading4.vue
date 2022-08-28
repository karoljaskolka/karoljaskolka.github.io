<template>
  <h4 class="text-lg text-secondary font-medium">
    <slot></slot>
  </h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Heading4",
});
</script>
