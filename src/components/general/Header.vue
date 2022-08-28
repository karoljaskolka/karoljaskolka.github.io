<template>
  <header class="bg-primary text-white">
    <Container class="py-8 flex justify-between items-center">
      <div class="font-chakra text-2xl uppercase">Karol Jaskółka</div>
      <nav class="hidden lg:flex">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="ml-8 first:ml-0 hover:text-gray"
        >
          {{ link.label }}
        </a>
      </nav>
    </Container>
  </header>
</template>

<script lang="ts">
import { useContent } from "@/hooks";
import { defineComponent } from "vue";
import { Container } from "@/components/layout";

export default defineComponent({
  name: "Header",
  components: { Container },
  setup() {
    const { links } = useContent();

    return { links };
  },
});
</script>
