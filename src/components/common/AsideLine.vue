<template>
  <aside class="relative">
    <div
      class="aside-dot absolute w-8 h-8 bg-white flex items-center justify-center rounded-xl"
    >
      <div class="w-4 h-4 bg-tertiary rounded-xl"></div>
    </div>
    <div class="aside-line w-1 rounded-md bg-primary h-full"></div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsideLine",
});
</script>

<style lang="scss" scoped>
.aside {
  &-dot {
    top: 2rem;
    left: -0.845rem;
  }
  &-line {
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: 0.25rem;
      background-color: #283149;
      border-radius: 0.375rem;
      left: 0;
    }
    &:after {
      bottom: -1.75rem;
      height: 2rem;
    }
    &:before {
      top: -1rem;
      height: 1.25rem;
    }
  }
}
</style>
