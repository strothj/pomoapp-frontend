import request from 'superagent';
import apiUrl from '../api';
import latency from '../latency';

let nextId = 128;

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_TASKS');
    },

    FETCH_TASKS({ commit }) {
      request.get(`${apiUrl}/tasks`).end((err, res) => {
        if (err) return;
        let items = res.body;
        console.log(items); // eslint-disable-line
        items = items.map(item => ({ href: `/projects/${item.projectId}/${item.id}`, ...item }));
        commit('TASKS', items);
      });
    },

    async ITEM_ADDED({ commit, getters, state }, { category, name }) {
      if (category !== 'tasks') return;
      await latency();
      const selectedProject = getters.selectedProject;
      if (!selectedProject) return;
      const item = {
        id: String(nextId),
        projectId: selectedProject,
        name,
        favorited: false,
        archived: false,
        href: `/projects/${String(selectedProject)}/${nextId}`,
      };
      nextId += 1;
      const tasks = state.tasks.slice(0, state.tasks.length);
      tasks.push(item);
      commit('TASKS', tasks);
    },

    async ITEM_EDITED({ commit, getters, state }, { category, item }) {
      if (category !== 'tasks') return;
      await latency();
      let tasks = state.tasks;
      tasks = tasks.slice(0, tasks.length);
      const itemIndex = tasks.findIndex((element) => {
        if (element.id !== item.id) return false;
        return true;
      });
      tasks[itemIndex] = item;
      commit('TASKS', tasks);
    },

    async ITEM_DELETE({ commit, state }, { category, item }) {
      if (category === 'tasks') {
        await latency();
        let { tasks } = state;
        const itemIndex = tasks.findIndex((element) => {
          if (element.id !== item.id) return false;
          return true;
        });
        if (itemIndex < 0) return;
        tasks = tasks.slice();
        tasks.splice(itemIndex, 1);
        commit('TASKS', tasks);
      } else if (category === 'projects') {
        // TODO: Remove tasks that used to belong to delete project
      }
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

    allTasks(state) {
      return state.tasks;
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
