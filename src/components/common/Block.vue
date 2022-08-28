<template>
  <span class="p-2 block border-complementary border-2 text-sm">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Block",
});
</script>
