<template>
  <article class="mb-10 mt-4 flex" v-for="entity in entities" :key="entity.id">
    <AsideLine class="mr-6" />
    <div ref="periods" class="invisible">
      <span v-if="entity.period" class="block mb-2">
        {{ entity.period }}
      </span>
      <Heading3 v-if="entity.heading" class="mb-2">
        {{ entity.heading }}
      </Heading3>
      <Note v-if="entity.note" class="mb-2">
        {{ entity.note }}
      </Note>
      <Heading4 v-if="entity.subheading" class="mb-2">
        {{ entity.subheading }}
      </Heading4>
      <Paragraph v-if="entity.description" class="mb-4">
        {{ entity.description }}
      </Paragraph>
      <BlockList :items="entity.technologies" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Heading3, Heading4, Paragraph, Note } from "@/components/layout";
import { AsideLine, BlockList } from "@/components/common";
import { PeriodDto } from "@/types";
import { useOnScrollTransition } from "@/hooks";

export default defineComponent({
  name: "Timeline",
  components: { AsideLine, BlockList, Heading3, Heading4, Paragraph, Note },
  props: {
    entities: {
      type: Array as PropType<PeriodDto[]>,
    },
  },
  setup() {
    const periods = ref([]);

    useOnScrollTransition(periods, "animate-scroll-top");

    return { periods };
  },
});
</script>
