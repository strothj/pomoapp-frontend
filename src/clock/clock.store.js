import { ClockService } from './clock.service';

export default {
  actions: {
    AUTHENTICATED({ commit, state }) {
      if (state.clock) state.clock.destroy();
      const clock = new ClockService();
      commit('clock', clock);
    },

    CLOCK_DONE_CLICKED({ dispatch, rootState }, { taskId }) {
      const task = rootState.tasks.tasks.find(item => item.id === taskId);
      if (!task) return;
      const editedTask = Object.assign({}, task);
      editedTask.archived = true;
      dispatch('ITEM_EDITED', {
        category: 'tasks',
        item: editedTask,
      });
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    clock(state, clock) { state.clock = clock; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    clock: null,
  },

};
