import * as api from 'src/api';

export default {
  updateProjectsListSortOrder: ({ commit }, sortOrder) => {
    commit('updateProjectsListSortOrder', sortOrder.join('|'));
  },

  loginUsingPassword: async ({ state }, { username, password }) => {
    try {
      await api.loginUsingPassword(state.authClient, username, password);
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  },
};
