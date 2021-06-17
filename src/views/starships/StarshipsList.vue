<template>
  <DataList
    :loading="loading"
    :goBack="handlerBack"
    :clickLinkHandler="openDetail"
    :columns="columns"
    :dataProvider="starshipsList.results"
    :title="title"
  />
</template>
<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = "Startships list";
    const columns = [
      {
        field: "name",
        header: "Name",
      },
    ];
    // Variables de nuestro almacen
    const store = useStore();
    const loading = ref(true);
    const starshipsList = computed(() => store.state.starshipsList);
    // Variables del router
    const router = useRouter();
    // Hook Vue
    onMounted(() => {
      store.dispatch("getStarshipsList").then(() => {
        loading.value = false;
      });
    });
    // Funciones del panel
    const handlerBack = () => {
      // Volvemos a la ruta home
      router.push("/");
    };
    const openDetail = (event) => {
      // Navegamos al detalle
      router.push({ name: "StarshipDetail", params: event });
    };
    return { loading, columns, title, starshipsList, handlerBack, openDetail };
  },
};
</script>
