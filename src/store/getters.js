export default {
  projectsAsListItems: ({ projects }) => projects.map(project => ({
    text: project.name,
  })),

  projectsListSortOrder: ({ projectsListSortOrder }) =>
    (projectsListSortOrder ? projectsListSortOrder.split('|') : []),
};
