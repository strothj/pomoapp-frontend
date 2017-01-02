const defaultSettings = {
  workDuration: 5,
  breakDuration: 6,
  longBreakDuration: 7,
  workCycles: 4,
};

class Clock {
  constructor(settings) {
    this.settings = Object.assign({}, settings);
    this.message = 'Ready';
    this.currentCycle = 0;
    this.timeRemaining = settings.workDuration;
    this.cycleState = 'work';
  }

  get startButtonText() {
    return this.intervalId ? 'Pause' : 'Start';
  }

  onWorkCycleDown() {
    if (this.currentCycle < this.settings.workCycles - 1) {
      this.message = 'Break';
      this.timeRemaining = this.settings.breakDuration;
      this.cycleState = 'break';
      return;
    }
    this.message = 'Long Break';
    this.timeRemaining = this.settings.longBreakDuration;
    this.cycleState = 'long break';
  }

  onBreakCycleDown() {
    this.timeRemaining = this.settings.workDuration;
    this.cycleState = 'work';
    this.currentCycle += 1;
    this.pause();
    this.message = 'Ready';
  }

  onLongBreakCycleDown() {
    this.onBreakCycleDown();
    this.currentCycle = 0;
  }

  // Arrow function used here to preserve context of 'this'.
  tick = () => {
    if (this.timeRemaining === 0) {
      if (this.cycleState === 'work') { this.onWorkCycleDown(); return; }
      if (this.cycleState === 'break') { this.onBreakCycleDown(); return; }
      if (this.cycleState === 'long break') { this.onLongBreakCycleDown(); return; }
      return;
    }
    this.timeRemaining -= 1;
  }

  pause() {
    this.message = `${this.message} - Paused`;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  toggleStart() {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000);
      if (this.cycleState === 'work') this.message = 'Work';
      if (this.cycleState === 'break') this.message = 'Break';
      if (this.cycleState === 'long break') this.message = 'Long Break';
      return;
    }
    this.pause();
  }
}

export default {
  actions: {
    CLOCK_START_CLICKED(context) {
      const { state } = context;
      state.clock.toggleStart();
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    /* eslint-enable no-param-reassign */
  },

  state: {
    clock: new Clock(defaultSettings),
  },

};
