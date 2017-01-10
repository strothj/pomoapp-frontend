import ApiClient from './projects.service';

export default {
  actions: {
    async AUTHENTICATED({ commit, dispatch, rootState }) {
      const client = new ApiClient(rootState.authenticationService);
      client.on('error', async (err) => {
        await rootState.authenticationService.signOut();
        dispatch('SHOW_SERVICE_ERROR', err);
      });
      commit('apiClient', client);
      commit('projects', await client.get('projects'));
      commit('tasks', await client.get('tasks'));
      commit('sorts', await client.get('sorts'));
    },

    async ADD_PROJECT({ commit, rootState, state }, newProject) {
      const client = new ApiClient(rootState.authenticationService);
      const addedProject = await client.create('projects', newProject);
      commit('addProject', addedProject);
    },

    async ADD_TASK({ commit, rootState, state }, newTask) {
      const client = new ApiClient(rootState.authenticationService);
      const addedTask = await client.create('tasks', newTask);
      commit('addTask', addedTask);
    },

    async UPDATE_PROJECTS({ commit, rootState, state }, projects) {
      const client = new ApiClient(rootState.authenticationService);
      await client.update('projects', projects);
      commit('updateProjects', projects);
    },

    async UPDATE_TASKS({ commit, rootState, state }, tasks) {
      const client = new ApiClient(rootState.authenticationService);
      await client.update('tasks', tasks);
      commit('updateTasks', tasks);
    },

    async DELETE_PROJECTS({ commit, rootState, state }, projects) {
      const client = new ApiClient(rootState.authenticationService);
      await client.del('projects', projects);
      commit('deleteProjects', projects);
    },

    async DELETE_TASKS({ commit, rootState, state }, tasks) {
      const client = new ApiClient(rootState.authenticationService);
      await client.del('tasks', tasks);
      commit('deleteTasks', tasks);
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    apiClient(state, client) { state.apiClient = client; },

    projects(state, projects) { state.projects = projects; },

    addProject(state, newProject) { state.projects.push(newProject); },

    addTask(state, newTask) { state.tasks.push(newTask); },

    updateProjects(state, updatedProjects) {
      updatedProjects.forEach((item) => {
        const itemIndex = state.projects.findIndex(project => project.id === item.id);
        if (itemIndex === -1) return;
        state.projects.splice(itemIndex, 1, item);
      });
    },

    updateTasks(state, updatedTasks) {
      updatedTasks.forEach((item) => {
        const itemIndex = state.tasks.findIndex(task => task.id === item.id);
        if (itemIndex === -1) return;
        state.tasks.splice(itemIndex, 1, item);
      });
    },

    deleteProjects(state, deletedProjects) {
      deletedProjects.forEach((item) => {
        const itemIndex = state.projects.findIndex(project => project.id === item.id);
        if (itemIndex === -1) return;
        state.projects.splice(itemIndex, 1);
      });
    },

    deleteTasks(state, deletedTasks) {
      deletedTasks.forEach((item) => {
        const itemIndex = state.tasks.findIndex(task => task.id === item.id);
        if (itemIndex === -1) return;
        state.tasks.splice(itemIndex, 1);
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
