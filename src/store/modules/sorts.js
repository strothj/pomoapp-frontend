import latency from '../latency';

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_SORTS');
    },

    async FETCH_SORTS({ commit }) {
      await latency();
      commit('FAVORITES_SORT_ORDER', 'p124|p123');
      commit('PROJECTS_SORT_ORDER', '124|125|123');
    },

    async UPDATE_SORT({ commit }, { category, order }) {
      await latency();
      if (category === 'favorites') commit('FAVORITES_SORT_ORDER', order);
      if (category === 'projects') commit('PROJECTS_SORT_ORDER', order);
      console.log('UPDATE_SORT', 'category', category, 'order', order); // eslint-disable-line
    },
  },

  getters: {
    favoritesSortOrder(state) { return state.favoritesSortOrder; },
    projectsSortOrder(state) { return state.projectsSortOrder; },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    FAVORITES_SORT_ORDER(state, order) { state.favoritesSortOrder = order; },
    PROJECTS_SORT_ORDER(state, order) { state.projectsSortOrder = order; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    favoritesSortOrder: null,
    projectsSortOrder: null,
  },
};
