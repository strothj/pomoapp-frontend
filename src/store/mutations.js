/* eslint-disable no-param-reassign */

export default {
  updateProjectsListSortOrder: (state, sortOrder) => {
    state.projectsListSortOrder = sortOrder;
  },

  authToken: (state, authToken) => {
    state.authToken = authToken;
  },

  loginError: (state, loginError) => {
    state.loginError = loginError;
  },

  user: (state, user) => {
    state.user = user;
  },

  projects: (state, projects) => {
    state.projects = projects;
  },

  favorites: (state, favorites) => {
    state.favorites = favorites;
  },

  editMode: (state, editMode) => {
    state.editMode = editMode;
  },
};
