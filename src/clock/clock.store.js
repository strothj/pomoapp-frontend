import { ClockService, demoSettings } from './clock.service';

export default {
  actions: {
    AUTHENTICATED({ commit, state, rootState }) {
      if (state.clock) state.clock.destroy();
      const settings = rootState.demoMode ? demoSettings : null;
      const clock = new ClockService(settings);
      commit('clock', clock);
    },

    CLOCK_DONE_CLICKED({ dispatch }, { taskId }) {
      dispatch('MARK_TASK_DONE', { taskId });
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
