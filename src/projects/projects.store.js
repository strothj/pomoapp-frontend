import ApiClient from './projects.service';

export default {
  actions: {
    async AUTHENTICATED({ commit, rootState, state }) {
      const client = new ApiClient(rootState.authenticationService);
      commit('apiClient', client);
      commit('projects', await client.get('projects'));
      commit('tasks', await client.get('tasks'));
      commit('sorts', await client.get('sorts'));
      console.log('projects', state.projects); // eslint-disable-line
    },

    async ADD_PROJECT({ commit, rootState, state }, newProject) {
      const client = new ApiClient(rootState.authenticationService);
      const addedProject = await client.create('projects', newProject);
      commit('addProject', addedProject);
    },

    async UPDATE_PROJECTS({ commit, rootState, state }, projects) {
      const client = new ApiClient(rootState.authenticationService);
      await client.update('projects', projects);
      commit('updateProjects', projects);
    },

    async DELETE_PROJECTS({ commit, rootState, state }, projects) {
      const client = new ApiClient(rootState.authenticationService);
      await client.del('projects', projects);
      commit('deleteProjects', projects);
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    apiClient(state, client) { state.apiClient = client; },

    projects(state, projects) { state.projects = projects; },

    addProject(state, newProject) { state.projects.push(newProject); },

    updateProjects(state, updatedProjects) {
      updatedProjects.forEach((item) => {
        const itemIndex = state.projects.findIndex(project => project.id === item.id);
        if (itemIndex === -1) return;
        state.projects.splice(itemIndex, 1, item);
      });
    },

    deleteProjects(state, deletedProjects) {
      deletedProjects.forEach((item) => {
        const itemIndex = state.projects.findIndex(project => project.id === item.id);
        if (itemIndex === -1) return;
        state.projects.splice(itemIndex, 1);
      });
    },

    tasks(state, tasks) { state.tasks = tasks; },

    sorts(state, sorts) { state.sorts = sorts; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    apiClient: null,
    projects: null,
    tasks: null,
    sorts: null,
  },

};
