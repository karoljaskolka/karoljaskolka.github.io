<template>
  <div v-if="items.length" class="flex flex-wrap -m-1">
    <Block v-for="item in items" :key="item" class="m-1">
      {{ item }}
    </Block>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Block } from "@/components/common";

export default defineComponent({
  name: "BlockList",
  components: { Block },
  props: {
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
});
</script>
