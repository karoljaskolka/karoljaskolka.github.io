<template>
  <button
    @click="scrollTop"
    type="button"
    class="fixed bottom-20 lg:bottom-6 right-6 z-40 w-8 h-8 rounded-full bg-tertiary"
  >
    <FontAwesomeIcon icon="fa solid fa-chevron-up" class="text-white" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollTop",
  setup() {
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    return { scrollTop };
  },
});
</script>
