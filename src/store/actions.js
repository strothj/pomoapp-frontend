export default {
  LOGGED_IN: ({ state }) => {
    if (state.router.currentRoute.name === 'Root' ||
      state.router.currentRoute.name === 'LoginView') {
      state.router.push({ name: 'ProjectsView' });
    }
  },
};
