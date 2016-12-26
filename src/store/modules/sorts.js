import request from 'superagent';
import apiUrl from '../api';

export default {
  actions: {
    LOGGED_IN({ dispatch }) {
      dispatch('FETCH_SORTS');
    },

    FETCH_SORTS({ commit }) {
      request.get(`${apiUrl}/sorts`).end((err, res) => {
        if (err) return;
        const sorts = {};
        res.body.forEach((element) => {
          sorts[element.target] = { order: element.sort, id: element.id };
        });
        commit('SORTS', { sorts });
      });
    },

    UPDATE_SORT({ commit, getters, state }, { category, order }) {
      const sorts = state.sorts;
      const key = category === 'favorites' || category === 'projects' ? category : getters.selectedProject;
      if (!sorts[key]) {
        request
          .post(`${apiUrl}/sorts`)
          .send({ target: key, sort: order })
          .end((err, res) => {
            if (err) {
              console.log('UPDATE_SORT POST', err); // eslint-disable-line
              return;
            }
            sorts[key] = { order: res.body.sort, id: res.body.id };
            commit('SORTS', { sorts });
          });
      } else {
        request
          .put(`${apiUrl}/sorts/${sorts[key].id}`)
          .send({ target: key, sort: order })
          .end((err) => {
            if (err) {
              console.log('UPDATE_SORT PUT', err); // eslint-disable-line
            }
            sorts[key].order = order;
            commit('SORTS', { sorts });
          });
      }
    },
  },

  getters: {
    favoritesSortOrder(state) { return state.sorts.favorites ? state.sorts.favorites.order : ''; },
    projectsSortOrder(state) { return state.sorts.projects ? state.sorts.projects.order : ''; },

    tasksSortOrder(state, getters) {
      const selectedProject = getters.selectedProject;
      if (!selectedProject) return '';

      return state.sorts[selectedProject] ? state.sorts[selectedProject].order : '';
    },

    sorts(state) { return state.sorts; },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    SORTS(state, { sorts }) { state.sorts = sorts; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    sorts: {},
  },
};
