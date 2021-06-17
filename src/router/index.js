import { createRouter, createWebHistory } from "vue-router";
import MenuMain from "../views/MenuMain.vue";
import characterRoutes from "./character/character";
import planetsRoutes from "./planets/planets";
import starshipsRoutes from "./starships/starships";

const routes = [
  {
    path: "/",
    name: "MenuMain",
    component: MenuMain,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "Error404" */ "../views/Error404.vue"),
  },
  ...characterRoutes,
  ...planetsRoutes,
  ...starshipsRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
