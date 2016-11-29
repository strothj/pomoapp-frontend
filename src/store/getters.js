export default {
  projectsById: (state) => {
    const projects = {};
    for (let i = 0; i < state.projects.length; i += 1) {
      projects[state.projects[i].id] = state.projects[i];
    }
    return projects;
  },
};
