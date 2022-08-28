<template>
  <div class="px-6 max-w-5xl mx-auto">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Container",
});
</script>
