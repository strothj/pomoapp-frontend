import request from 'superagent';
import apiUrl from '../api';

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_PROJECTS');
    },

    FETCH_PROJECTS({ commit, getters }) {
      request
        .get(`${apiUrl}/projects`)
        .set('Authorization', getters.jwtHeader)
        .end((err, res) => {
          if (err) return;
          let items = res.body;
          items = items.map(item => ({ href: `/projects/${item.id}`, ...item }));
          commit('PROJECTS', items);
        });
    },

    ITEM_ADDED({ commit, getters, state }, { category, name }) {
      if (category !== 'projects') return;
      let item = {
        name,
        favorited: false,
        archived: false,
      };
      request
        .post(`${apiUrl}/projects`)
        .set('Authorization', getters.jwtHeader)
        .send(item)
        .end((err, res) => {
          if (err) return;
          item = res.body;
          item.href = `/projects/${item.id}`;
          let projects = getters.projects;
          projects = projects.slice(0, projects.length);
          projects.push(item);
          commit('PROJECTS', projects);
          getters.router.push(item.href);
        });
    },

    ITEM_EDITED({ commit, getters, state }, { category, item }) {
      if (category !== 'projects') return;
      request
        .put(`${apiUrl}/projects/${item.id}`)
        .set('Authorization', getters.jwtHeader)
        .send(item)
        .end((err) => {
          if (err) return;
          const projects = state.projects.slice(0, state.projects.length);
          const itemIndex = projects.findIndex(element => (element.id === item.id));
          projects[itemIndex] = item;
          commit('PROJECTS', projects);
        });
    },

    ITEM_DELETE({ commit, getters, state }, { category, item }) {
      if (category !== 'projects') return;
      request
        .delete(`${apiUrl}/projects/${item.id}`)
        .set('Authorization', getters.jwtHeader)
        .end((err) => {
          if (err) return;
          let projects = state.projects;
          const itemIndex = projects.findIndex(element => (element.id === item.id));
          if (itemIndex < 0) { return; }
          projects = projects.slice();
          projects.splice(itemIndex, 1);
          commit('PROJECTS', projects);
        });
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
