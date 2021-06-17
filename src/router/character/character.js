const CharacterList = () => import("@/views/character/CharacterList.vue");
const CharacterDetail = () => import("@/views/character/CharacterDetail.vue");
const characterRoutes = [
  {
    path: "/characterList",
    name: "CharacterList",
    component: CharacterList,
  },
  {
    path: "/characterdetail",
    name: "CharacterDetail",
    component: CharacterDetail,
  },
];
export default characterRoutes;
