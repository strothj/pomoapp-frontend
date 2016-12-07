import * as api from 'src/api';

export default {
  updateProjectsListSortOrder: ({ commit, state }, sortOrder) => {
    commit('updateProjectsListSortOrder', sortOrder.join('|'));
  },

  loginUsingPassword: async ({ commit, dispatch, state }, { username, password, remember }) => {
    try {
      const token = await api.loginUsingPassword(state.authClient, username, password);
      commit('authToken', token);
      // Save the refreshToken to a cookie if the user selected 'Remember me'.
      if (remember && token.refreshToken) {
        api.storeRefreshToken(token.refreshToken);
      }
      commit('loginError', '');
      dispatch('loadProgramState');
    } catch (e) {
      if (e.code === 'EAUTH') {
        commit('loginError', 'Email or password is incorrect');
        return;
      }
      commit('loginError', 'Unable to log in due to a server error.');
    }
  },

  loginUsingSavedToken: async ({ commit, dispatch, state }) => {
    try {
      const refreshToken = await api.loadRefreshToken();
      const token = await api.loginUsingRefreshToken(state.authClient, refreshToken);
      commit('authToken', token);
      dispatch('loadProgramState');
    } catch (e) {
      api.deleteRefreshToken();
      if (state.router.currentRoute.name === 'ProjectsView') {
        state.router.push({ name: 'LoginView' });
      }
      return;
    }
  },

  loadProgramState: async ({ commit, state }) => {
  /* eslint-disable no-console */
    try {
      // TODO: Make both requests at the same time.
      const user = await api.getUser(state.authToken);
      const { favorites, projects } = await api.getProjects(state.authToken);
      commit('user', user);
      commit('favorites', favorites);
      commit('projects', projects);
    } catch (e) {
      console.error(e);
      return;
    }

    if (state.router.currentRoute.name === 'Root' ||
      state.router.currentRoute.name === 'LoginView') {
      state.router.push({ name: 'ProjectsView' });
    }
  },
};
