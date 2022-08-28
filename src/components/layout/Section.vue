<template>
  <section
    class="py-12 border-complementary"
    :class="{ 'border-bottom': border }"
  >
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Section",
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  &.border-bottom {
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
}
</style>
