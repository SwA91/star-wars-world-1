<template>
  <Card>
    <template #header>
      <img
        src="@/assets/images/Star_Wars_Logo.svg"
        alt="404"
        width="300"
        height="300"
      />
    </template>
    <template #title>
      Star Wars World
    </template>
    <template #content>
      <Menu :model="items" />
    </template>
  </Card>
</template>

<script>
import { ref } from "vue";
import itemsMenu from "@/assets/properties/menu.json";
export default {
  name: "MenuMain",
  setup() {
    const items = ref(itemsMenu);
    return { items };
  },
};
</script>
