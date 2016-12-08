import latency from '../latency';

export default {
  actions: {
    LOGGED_IN: ({ dispatch }) => {
      dispatch('FETCH_PROJECTS');
    },

    FETCH_PROJECTS: ({ commit }) => {
      latency();
      commit('PROJECTS', [
        { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
        { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
        { id: '125', name: 'Emails', favorited: false, href: '/projects/125' },
      ]);
      latency();
      commit('PROJECTS_SORT_ORDER', '124|125|123');
    },
  },

  getters: {
    projects: state => state.projects,
    projectsSortOrder: state => state.projectsSortOrder,
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    PROJECTS: (state, projects) => { state.projects = projects; },
    PROJECTS_SORT_ORDER: (state, order) => { state.projectsSortOrder = order; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    projects: [],
    projectsSortOrder: null,
  },

};
