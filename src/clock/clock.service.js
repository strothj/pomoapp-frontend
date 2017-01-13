import tick from './264498__foolboymedia__tick-tock.wav';
import dong from './333695__khrinx__thin-bell-ding-2.wav';

export const defaultSettings = {
  workDuration: 25 * 60,
  breakDuration: 5 * 60,
  longBreakDuration: 30 * 60,
  workCycles: 4,
  autoStartBreak: true,
  autoStartLongBreak: true,
  playAudio: true,
};

export const demoSettings = Object.assign({}, defaultSettings);
demoSettings.workDuration = 5;
demoSettings.breakDuration = 6;
demoSettings.longBreakDuration = 7;

export const STAGES = {
  WORK: 'Work',
  BREAK: 'Break',
  LONG_BREAK: 'Long break',
};

export const STATES = {
  STOPPED: 'Ready',
  STARTED: '',
  PAUSED: 'Paused',
};

export class ClockService {
  constructor(settings) {
    this.settings = settings || Object.assign({}, defaultSettings);
    this.reset();
    this.tickSound = new Audio(tick);
    this.dongSound = new Audio(dong);
  }

  reset() {
    this.changeCycle(0);
    this.changeStage(STAGES.WORK);
    this.changeState(STATES.STOPPED);
    this.changeTime(this.settings.workDuration);
  }

  start() {
    if (this.state === STATES.STARTED) return;
    this.changeState(STATES.STARTED);
    if (this.settings.playAudio) this.tickSound.play();
  }

  pause() {
    if (this.state !== STATES.STARTED) return;
    this.changeState(STATES.PAUSED);
  }

  destroy() {
    // Release timer so object can be cleaned up.
    this.changeState(STATES.STOPPED);
  }

  // tick() lacks the correct context for 'this' because it is called from a timer.
  // eslint-disable-next-line class-methods-use-this
  tick(self) {
    if (self.timeRemaining === 0) {
      switch (self.stage) {
        case STAGES.WORK: { self.onWorkCycleDone.bind(self)(); return; }
        case STAGES.BREAK: { self.onBreakCycleDone.bind(self)(); return; }
        case STAGES.LONG_BREAK: { self.onLongBreakCycleDone.bind(self)(); return; }
        default:
          // eslint-disable-next-line no-console
          console.error('Unrecognized clock stage value', self.stage);
          return;
      }
    }
    self.timeRemaining -= 1; // eslint-disable-line no-param-reassign
  }

  changeStage(stage) {
    this.stage = stage;
  }

  changeState(state) {
    this.state = state;
    if (state === STATES.STOPPED || state === STATES.PAUSED) {
      if (this.timer) clearInterval(this.timer);
    }
    if (state === STATES.STARTED) this.timer = setInterval(this.tick, 1000, this);
  }

  changeTime(time) {
    this.timeRemaining = time;
  }

  changeCycle(cycle) {
    this.currentCycle = cycle;
  }

  onWorkCycleDone() {
    if (this.settings.playAudio) this.dongSound.play();

    // Start short break if we're not on the last Pomodoro cycle.
    if (this.currentCycle < this.settings.workCycles - 1) {
      this.changeStage(STAGES.BREAK);
      this.changeTime(this.settings.breakDuration);

      // Stop the timer if the autoStartBreak setting is false.
      if (!this.settings.autoStartBreak) this.changeState(STATES.STOPPED);

      return;
    }

    // Start long break if we just finished last work cycle.
    this.changeStage(STAGES.LONG_BREAK);
    this.changeTime(this.settings.longBreakDuration);

    // Stop the timer if the autoStartLongBreak setting is false.
    if (!this.settings.autoStartLongBreak) this.changeState(STATES.STOPPED);
  }

  onBreakCycleDone() {
    this.changeStage(STAGES.WORK);
    this.changeTime(this.settings.workDuration);
    this.changeCycle(this.currentCycle + 1);

    // Stop the timer if autoStartWork setting is false.
    if (!this.settings.autoStartWork) this.changeState(STATES.STOPPED);
  }

  onLongBreakCycleDone() {
    this.onBreakCycleDone();
    this.changeCycle(0);
    this.changeState(STATES.STOPPED);
  }
}
