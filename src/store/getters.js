export default {
  projectsAsListItems: ({ projects }) => projects.map(project => ({
    text: project.name,
  })),

  projectsListSortOrder: ({ projectsListSortOrder }) =>
    (projectsListSortOrder ? projectsListSortOrder.split('|') : []),

  user: state => state.user || {},
  userFullName: (state, getters) => getters.user.fullName || '',
  userEmailAddress: (state, getters) => getters.user.emailAddress || '',
  userAvatar: (state, getters) => getters.user.avatar || '',
  selectedProjectId: (state) => {
    if (!state.selectedProject || !state.selectedProject.id) return null;
    return state.selectedProject.id;
  },
  selectedProjectHref: (state) => {
    if (!state.selectedProject) return '';
    return `/projects/${state.selectedProject.id}`;
  },
  favoritedItems: state => state.favoritedItems || [],
  projects: state => state.projects || [],
  selectedProjectTasks: (state) => {
    if (!state.selectedProject || !state.selectedProject.tasks) return [];
    return state.selectedProject.tasks;
  },
};
