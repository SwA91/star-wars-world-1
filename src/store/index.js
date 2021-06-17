import { createStore } from "vuex";
import { useToast } from "primevue/usetoast";

export default createStore({
  state: {
    characterList: {},
    planetsList: {},
    starshipsList: {},
  },
  mutations: {
    setStarships(state, payload) {
      state.starshipsList = payload;
    },
    setPlanets(state, payload) {
      state.planetsList = payload;
    },
    setPeople(state, payload) {
      state.characterList = payload;
    },
  },
  actions: {
    async getStarshipsList({ commit }) {
      const toast = useToast();
      try {
        let response = await fetch("https://swapi.dev/api/starships/");
        response = await response.json();
        response.results = response.results.map((e, i) => {
          e["id"] = i + 1;
          return e;
        });
        commit("setStarships", response);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message || error,
          life: 6000,
        });
        console.error(error);
      }
    },
    async getPlanetsList({ commit }) {
      const toast = useToast();
      try {
        let response = await fetch("https://swapi.dev/api/planets/");
        response = await response.json();
        response.results = response.results.map((e, i) => {
          e["id"] = i + 1;
          return e;
        });
        commit("setPlanets", response);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message || error,
          life: 6000,
        });
        console.error(error);
      }
    },
    async getCharacterList({ commit }) {
      const toast = useToast();
      try {
        let response = await fetch("https://swapi.dev/api/people/");
        response = await response.json();
        response.results = response.results.map((e, i) => {
          e["id"] = i + 1;
          return e;
        });
        commit("setPeople", response);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message || error,
          life: 6000,
        });
        console.error(error);
      }
    },
  },
  modules: {},
  getters: {},
});
