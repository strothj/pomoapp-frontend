import latency from '../latency';

let nextId = 126;

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_PROJECTS');
    },

    async FETCH_PROJECTS({ commit }) {
      await latency();
      commit('PROJECTS', [
        { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
        { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
        { id: '125', name: 'Emails', favorited: false, href: '/projects/125' },
      ]);
    },

    async ITEM_ADDED({ commit, getters, state }, { category, name }) {
      if (category !== 'projects') return;
      await latency();
      const item = {
        id: String(nextId),
        name,
        favorited: false,
        href: `/projects/${String(nextId)}`,
      };
      nextId += 1;
      const projects = state.projects.slice(0, state.projects.length);
      projects.push(item);
      commit('PROJECTS', projects);
      getters.router.push(item.href);
    },

    async ITEM_EDITED({ commit, state }, { category, item }) {
      if (category !== 'projects') return;
      await latency();
      let projects = state.projects;
      projects = projects.slice(0, projects.length);
      const itemIndex = projects.findIndex((element) => {
        if (element.id !== item.id) return false;
        return true;
      });
      projects[itemIndex] = item;
      commit('PROJECTS', projects);
    },
  },

  getters: {
    projects(state) { return state.projects; },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    PROJECTS(state, projects) { state.projects = projects; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    projects: [],
  },

};
