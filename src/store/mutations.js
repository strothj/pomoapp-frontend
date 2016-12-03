/* eslint-disable no-param-reassign */

export default {
  updateProjectsListSortOrder: (state, sortOrder) => {
    state.projectsListSortOrder = sortOrder;
  },

  authToken: (state, authToken) => {
    state.authToken = authToken;
  },
};
