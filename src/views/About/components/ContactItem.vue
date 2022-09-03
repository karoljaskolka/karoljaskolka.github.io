<template>
  <a
    :href="contact.url"
    target="_blank"
    rel="noopener noreferrer"
    class="relative flex items-center w-fit md:flex-row-reverse md:ml-auto animate-underline"
    :aria-label="contact.aria"
  >
    <FontAwesomeIcon
      :icon="contact.icon"
      size="2x"
      class="text-secondary mr-4 md:mr-0 w-7 h-7"
    />
    <span class="mr-0 md:mr-4 text-secondary">
      {{ contact.label }}
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactItem",
  props: {
    contact: {
      type: Object,
    },
  },
});
</script>
