export default {
  LOGGED_IN({ state }) {
    if (state.router.currentRoute.name === 'Root' ||
      state.router.currentRoute.name === 'LoginView') {
      // FIXME: Pick default project/empty text
      state.router.push('/projects/123');
    }
  },

  NAVIGATED({ commit }) {
    commit('SIDE_NAV_OPEN', { open: false });
  },
};
