<template>
  <span class="block text-grayDark text-sm">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Note",
});
</script>
