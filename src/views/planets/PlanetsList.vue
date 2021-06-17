<template>
  <DataList
    :loading="loading"
    :goBack="handlerBack"
    :clickLinkHandler="openDetail"
    :columns="columns"
    :dataProvider="planetsList.results"
    :title="title"
  />
</template>
<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = "Planets list";
    const columns = [
      {
        field: "name",
        header: "Name",
      },
    ];
    // Variables de nuestro almacen
    const store = useStore();
    const loading = ref(true);
    const planetsList = computed(() => store.state.planetsList);
    // Variables del router
    const router = useRouter();
    // Hook Vue
    onMounted(() => {
      store.dispatch("getPlanetsList").then(() => {
        loading.value = false;
      });
    });
    // Funciones del panel
    const handlerBack = () => {
      // Volvemos a la ruta home
      router.push("/");
    };
    const openDetail = (event) => {
      // Navegamos al detalle del personaje
      router.push({ name: "PlanetDetail", params: event });
    };
    return { loading, columns, title, planetsList, handlerBack, openDetail };
  },
};
</script>
