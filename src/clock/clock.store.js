const CLOCK_STATES = {
  STOPPED: 0,
};

export default {
  actions: {
  },

  getters: {
    clockMessage(state) {
      switch (state.clockState) {
        case CLOCK_STATES.STOPPED: return 'Start';
        default: return '';
      }
    },
    clockStartButtonText(state) {
      switch (state.clockState) {
        case CLOCK_STATES.STOPPED: return 'Start';
        default: return 'Pause';
      }
    },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    // TODO: Add mutations to change settings.
    /* eslint-enable no-param-reassign */
  },

  state: {
    workDuration: 1500,
    breakDuration: 300,
    longBreakDuration: 1800,
    workCycles: 4,
    timeRemaining: 1500,
    clockState: CLOCK_STATES.STOPPED,
  },

};
