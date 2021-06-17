const PlanetsList = () => import("@/views/planets/PlanetsList.vue");
const PlanetDetail = () => import("@/views/planets/PlanetDetail.vue");
const planetsRoutes = [
  {
    path: "/planetslist",
    name: "PlanetsList",
    component: PlanetsList,
  },
  {
    path: "/planetdetail",
    name: "PlanetDetail",
    component: PlanetDetail,
  },
];
export default planetsRoutes;
