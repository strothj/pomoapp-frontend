import latency from '../latency';

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_TASKS');
    },

    async FETCH_TASKS({ commit }) {
      await latency();
      commit('TASKS', [
        { id: '123', projectId: '123', name: 'Create README.md', favorited: true, href: '/projects/123/123' },
        { id: '124', projectId: '123', name: 'Fix Fivbar', favorited: false, href: '/projects/123/124' },
        { id: '125', projectId: '124', name: 'Create MVP', favorited: false, href: '/projects/124/125' },
        { id: '126', projectId: '124', name: 'Choose frontend framework', favorited: true, href: '/projects/124/126' },
        { id: '127', projectId: '125', name: 'Respond to personal emails', favorited: true, href: '/projects/125/127' },
      ]);
    },
  },

  getters: {
    tasks(state, getters) {
      const { selectedProject } = getters;
      if (!selectedProject) return [];
      const tasks = state.tasks;
      return tasks.filter((element) => {
        if (element.projectId !== selectedProject) return false;
        return true;
      });
    },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    TASKS(state, tasks) { state.tasks = tasks; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    tasks: [],
  },

};
