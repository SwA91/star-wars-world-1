<template>
  <DataList
    :loading="loading"
    :goBack="handlerBack"
    :clickLinkHandler="openDetail"
    :columns="columns"
    :dataProvider="characterList.results"
    :title="title"
  />
</template>
<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = "People list";
    const columns = [
      {
        field: "name",
        header: "Name",
      },
    ];
    // Variables de nuestro almacen
    const store = useStore();
    const loading = ref(true);
    const characterList = computed(() => store.state.characterList);
    // Variables del router
    const router = useRouter();
    // Hook Vue
    onMounted(() => {
      store.dispatch("getCharacterList").then(() => {
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
      router.push({ name: "CharacterDetail", params: event });
    };
    return { loading, columns, title, characterList, handlerBack, openDetail };
  },
};
</script>
