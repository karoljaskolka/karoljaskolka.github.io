<template>
  <div class="md:w-4/5 lg:w-2/3 md:mx-auto">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NarrowContainer",
});
</script>
