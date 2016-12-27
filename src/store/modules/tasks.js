import request from 'superagent';
import apiUrl from '../api';

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_TASKS');
    },

    FETCH_TASKS({ commit, getters }) {
      request
        .get(`${apiUrl}/tasks`)
        .set('Authorization', getters.jwtHeader)
        .end((err, res) => {
          if (err) return;
          let items = res.body;
          items = items.map(item => ({ href: `/projects/${item.projectId}/${item.id}`, ...item }));
          commit('TASKS', items);
        });
    },

    ITEM_ADDED({ commit, getters, state }, { category, name }) {
      if (category !== 'tasks') return;
      const selectedProject = getters.selectedProject;
      let item = {
        projectId: selectedProject,
        name,
        favorited: false,
        archived: false,
      };
      request
        .post(`${apiUrl}/tasks`)
        .set('Authorization', getters.jwtHeader)
        .send(item)
        .end((err, res) => {
          if (err) return;
          item = res.body;
          item.href = `/projects/${selectedProject}/${item.id}`;
          const tasks = state.tasks.slice(0, state.tasks.length);
          tasks.push(item);
          commit('TASKS', tasks);
        });
    },

    ITEM_EDITED({ commit, getters, state }, { category, item }) {
      if (category !== 'tasks') return;
      request
        .put(`${apiUrl}/tasks/${item.id}`)
        .set('Authorization', getters.jwtHeader)
        .send(item)
        .end((err) => {
          if (err) return;
          const tasks = state.tasks.slice(0, state.tasks.length);
          const itemIndex = tasks.findIndex(element => (element.id === item.id));
          tasks[itemIndex] = item;
          commit('TASKS', tasks);
        });
    },

    ITEM_DELETE({ commit, getters, state }, { category, item }) {
      if (category === 'tasks') {
        request
          .delete(`${apiUrl}/tasks/${item.id}`)
          .set('Authorization', getters.jwtHeader)
          .end((err) => {
            if (err) return;
            let tasks = state.tasks;
            const itemIndex = tasks.findIndex(element => (element.id === item.id));
            if (itemIndex < 0) return;
            tasks = tasks.slice();
            tasks.splice(itemIndex, 1);
            commit('TASKS', tasks);
          });
      }

      // When a project is deleted, remove all tasks belonging to it.
      if (category === 'projects') {
        let tasks = state.tasks.slice();
        tasks = tasks.filter(element => (element.projectId !== item.id));
        commit('TASKS', tasks);
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
