<template>
  <Card>
    <template #header>
      <img src="@/assets/images/404.jpg" alt="404" width="300" height="300" />
    </template>
    <template #title>
      <p>This page is not fully armed and operational.</p>
      <p>Try something else?</p>
    </template>
    <template #footer>
      <Button
        type="button"
        label="Go Home"
        class="p-button-outlined"
        @click="goHome"
        icon="pi pi-arrow-left"
        iconPos="left"
      />
    </template>
  </Card>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    // Funciones del panel
    const goHome = () => {
      // Volvemos al panel de listado
      router.push({ name: "MenuMain" });
    };
    return {
      goHome,
    };
  },
};
</script>
