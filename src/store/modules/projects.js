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

    ITEM_EDITED: async ({ commit, state }, { category, item }) => {
      if (category !== 'projects') return;
      await latency();
      let projects = state.projects;
      projects = projects.slice(0, projects.length);
      const itemIndex = projects.findIndex((element) => {
        if (element.id === item.id) return true;
        return false;
      });
      projects[itemIndex] = item;
      commit('PROJECTS', projects);
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
