export default {
  router(state) { return state.router; },

  selectedProject(state) {
    const projectId = state.router.currentRoute.params.projectId;
    return projectId || null;
  },

  selectedProjectName(state, getters) {
    const { projects, selectedProject } = getters;
    if (!selectedProject) return '';
    const project = projects.find((element) => {
      if (element.id !== selectedProject) return false;
      return true;
    });
    return project ? project.name : '';
  },

  selectedProjectHref(state, getters) {
    const { selectedProject } = getters;
    if (!selectedProject) return null;
    return `/projects/${selectedProject}`;
  },
};
