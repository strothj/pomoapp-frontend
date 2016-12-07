/* eslint-disable no-param-reassign */

export default {
  authToken: (state, authToken) => {
    state.authToken = authToken;
  },

  loginError: (state, loginError) => {
    state.loginError = loginError;
  },

  editMode: (state, editMode) => {
    state.editMode = editMode;
  },

  user: (state, user) => {
    state.user = user;
  },

  projects: (state, projects) => {
    state.projects = projects;
  },

  projectsSortOrder: (state, order) => {
    state.projectsSortOrder = order;
  },

  favorites: (state, favorites) => {
    state.favorites = favorites;
  },

  favoritesSortOrder: (state, order) => {
    state.favoritesSortOrder = order;
  },
};
