<template>
  <div
    v-if="links.length && !hidden"
    class="lg:hidden fixed -bottom-1 right-0 left-0 z-30 animate-fade"
  >
    <nav class="mobile-nav bg-white flex text-secondary rounded-t-md">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="flex-1 p-5 hover:text-secondary border-complementary flex justify-center"
        :aria-label="link.aria"
      >
        <FontAwesomeIcon class="w-5 h-5" :icon="link.icon" />
        <span class="hidden">{{ link.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { useContent, useOnScrollHidden } from "@/hooks";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MobileNav",
  setup() {
    const hidden = ref(true);
    const { links } = useContent();

    useOnScrollHidden(hidden, 120);

    return { links, hidden };
  },
});
</script>

<style lang="scss" scoped>
.mobile-nav {
  box-shadow: 0 20px 25px 15px rgb(0 0 0 / 0.1),
    0 8px 10px 15px rgb(0 0 0 / 0.1);
  a:not(:last-child) {
    border-right-width: 1px;
  }
}
</style>
