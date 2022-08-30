<template>
  <button
    v-if="!hidden"
    @click="scrollTop"
    type="button"
    class="fixed bottom-20 lg:bottom-6 right-6 z-40 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-tertiary hover:bg-opacity-80 duration-500 animate-fade"
    :aria-label="$t('aria.scroll-top')"
  >
    <FontAwesomeIcon icon="fa solid fa-chevron-up" class="text-white" />
  </button>
</template>

<script lang="ts">
import { useOnScrollHidden } from "@/hooks";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ScrollTop",
  setup() {
    const hidden = ref(true);

    useOnScrollHidden(hidden, 120);

    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    return { scrollTop, hidden };
  },
});
</script>
