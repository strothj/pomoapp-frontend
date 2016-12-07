export default {
  projectsAsListItems: ({ projects }) => projects.map(project => ({
    text: project.name,
  })),

  projectsListSortOrder: ({ projectsListSortOrder }) =>
    (projectsListSortOrder ? projectsListSortOrder.split('|') : []),

  selectedProjectId: (state) => {
    if (!state.selectedProject || !state.selectedProject.id) return null;
    return state.selectedProject.id;
  },
  selectedProjectHref: (state) => {
    if (!state.selectedProject) return '';
    return `/projects/${state.selectedProject.id}`;
  },
  favoritedItems: state => state.favoritedItems || [],
  selectedProjectTasks: (state) => {
    if (!state.selectedProject || !state.selectedProject.tasks) return [];
    return state.selectedProject.tasks;
  },

  favorites: state => state.favorites || [],
  projects: state => state.projects || [],
};
