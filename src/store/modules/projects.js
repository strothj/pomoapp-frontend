import latency from '../latency';

export default {
  actions: {
    LOGGED_IN: ({ dispatch }) => {
      dispatch('FETCH_PROJECTS');
    },

    FETCH_PROJECTS: async ({ commit }) => {
      await latency();
      commit('PROJECTS', [
        { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
        { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
        { id: '125', name: 'Emails', favorited: false, href: '/projects/125' },
      ]);
    },
  },

  getters: {
    projects: state => state.projects,
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    PROJECTS: (state, projects) => { state.projects = projects; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    projects: [],
  },

};
