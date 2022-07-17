const state = {
  isLoading: true,
  articles: ""
};
const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  articles(state) {
    return state.articles;
  }
};
const mutations = {
  updateIsLoading: (state, payload) => {
    state.isLoading = payload;
  },
  setArticle: (state, payload) => {
    state.articles = payload;
  }
};
const actions = {
  updateIsLoading(context, payload) {
    context.commit("updateIsLoading", payload);
  },
  setArticle({ commit }, payload) {
    commit("setArticle", payload);
  }
};
export const generalStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
