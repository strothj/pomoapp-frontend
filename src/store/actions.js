import * as api from 'src/api';

export default {
  loadProgramState: async ({ commit, state }) => {
  /* eslint-disable no-console */
    try {
      // TODO: Make both requests at the same time.
      // const user = await api.getUser(state.authToken);
      const {
        favorites,
        favoritesSortOrder,
        projects,
      } = await api.getProjects(state.authToken);
      commit('favorites', favorites);
      commit('favoritesSortOrder', favoritesSortOrder);
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

  LOGGED_IN: ({ dispatch }) => {
    dispatch('loadProgramState');
  },

  projectsUpdateSortOrder: async ({ commit, state }, order) => {
    commit('projectsSortOrder', order);
    api.setProjectsSortOrder(state.token, order);
  },

  projectsToggleFavorite: async ({ commit, state }, item) => {
    const updatedItem = Object.assign({}, item);
    updatedItem.favorited = !updatedItem.favorited;
    // await api.updateItem(updatedItem);
    console.log(updatedItem);
  },

  favoritesUpdateSortOrder: async ({ commit, state }, order) => {
    commit('favoritesSortOrder', order);
    api.setFavoritesSortOrder(state.token, order);
  },
};
