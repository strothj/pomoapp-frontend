import latency from '../latency';

export default {
  actions: {
    LOGGED_IN: ({ dispatch }) => {
      dispatch('FETCH_SORTS');
    },

    FETCH_SORTS: async ({ commit }) => {
      await latency();
      commit('PROJECTS_SORT_ORDER', '124|125|123');
    },

    UPDATE_SORT: async ({ commit }, { category, order }) => {
      await latency();
      if (category === 'projects') commit('PROJECTS_SORT_ORDER', order);
    },
  },

  getters: {
    projectsSortOrder: state => state.projectsSortOrder,
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    PROJECTS_SORT_ORDER: (state, order) => { state.projectsSortOrder = order; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    projectsSortOrder: null,
  },
};
