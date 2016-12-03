import * as api from 'src/api';

export default {
  updateProjectsListSortOrder: ({ commit }, sortOrder) => {
    commit('updateProjectsListSortOrder', sortOrder.join('|'));
  },

  loginUsingPassword: async ({ commit, state }, { username, password }) => {
    /* eslint-disable no-console */
    let token;
    try {
      token = await api.loginUsingPassword(state.authClient, username, password);
      commit('authToken', token);
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  },
};
