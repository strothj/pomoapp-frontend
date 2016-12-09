export default {
  router(state) { return state.router; },

  selectedProject(state) {
    const projectId = state.router.currentRoute.params.projectId;
    return projectId || null;
  },
};
