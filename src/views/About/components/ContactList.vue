<template>
  <div>
    <ContactItem
      v-for="entity in entities"
      :key="entity.id"
      :contact="entity"
      class="mb-4 last:mb-0"
    />
  </div>
</template>

<script lang="ts">
import { ContactDto } from "@/types";
import { defineComponent, PropType } from "vue";
import ContactItem from "./ContactItem.vue";

export default defineComponent({
  name: "ContactList",
  components: { ContactItem },
  props: {
    entities: {
      type: Array as PropType<ContactDto[]>,
    },
  },
});
</script>
