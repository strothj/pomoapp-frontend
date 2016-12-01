export default {
  updateProjectsListSortOrder: ({ commit }, sortOrder) => {
    commit('updateProjectsListSortOrder', sortOrder.join('|'));
  },
};
