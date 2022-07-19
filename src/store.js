import { generalStore } from "@/stores/general.store.js";

import { createStore } from "vuex";

export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    general: generalStore,
  },
});
