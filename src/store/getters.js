export default {
  router(state) { return state.router; },

  selectedProject(state) {
    const projectId = state.router.currentRoute.params.projectId;
    return projectId || null;
  },

  selectedTask(state) {
    const taskId = state.router.currentRoute.params.taskId;
    return taskId || null;
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

  selectedTaskName(state, getters) {
    const { tasks, selectedTask } = getters;
    if (!selectedTask) return '';
    const task = tasks.find((element) => {
      if (element.id !== selectedTask) return false;
      return true;
    });
    return task ? task.name : '';
  },

  selectedProjectHref(state, getters) {
    const { selectedProject } = getters;
    if (!selectedProject) return null;
    return `/projects/${selectedProject}`;
  },

  selectedTaskHref(state, getters) {
    const { selectedProjectHref, selectedTask } = getters;
    if (!selectedTask) return null;
    return `${selectedProjectHref}/${selectedTask}`;
  },
};
