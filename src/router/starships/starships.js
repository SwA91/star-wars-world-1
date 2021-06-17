const StarshipsList = () => import("@/views/starships/StarshipsList.vue");
const StarshipDetail = () => import("@/views/starships/StarshipDetail.vue");
const starshipsRoutes = [
  {
    path: "/starshipdetail",
    name: "StarshipDetail",
    component: StarshipDetail,
  },
  {
    path: "/starshipslist",
    name: "StarshipsList",
    component: StarshipsList,
  },
];
export default starshipsRoutes;
