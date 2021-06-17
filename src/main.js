import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";
import Menu from "primevue/menu";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import InputNumber from "primevue/inputnumber";

// Exporto mis componentes
import DataList from "@/components/DataList";

import "primevue/resources/themes/arya-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@/assets/scss/main.scss";

const app = createApp(App);
// Iniciamos los componentes de PrimeVue
app.use(PrimeVue, {
  ripple: true,
});
app.component("Toast", Toast);
app.component("InputNumber", InputNumber);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Menu", Menu);
app.component("Card", Card);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("DataList", DataList);
app.use(ToastService);
app.use(store);
app.use(router);
app.mount("#app");
