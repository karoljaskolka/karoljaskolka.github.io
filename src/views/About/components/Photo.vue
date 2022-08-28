<template>
  <div>
    <figure class="flex justify-center items-center md:justify-start">
      <img
        class="border-complementary border-2 rounded-full w-48 lg:w-56 h-48 lg:h-56 object-cover"
        src="/assets/me.JPG"
        :alt="$t('about.photo')"
      />
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Photo",
});
</script>
