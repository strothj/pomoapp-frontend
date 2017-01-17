const standard = {
  primary: {
    // color: 'blue-grey',
    // hue: '800',
    color: 'blue',
    hue: '600',
  },
  accent: 'blue',
  warn: 'deep-orange',
  background: 'white',
};

// Register a theme with a black background so that the Vue Material theme
// engine will set text to white.
const transparent = Object.assign({}, standard);
transparent.background = 'black';

export default {
  default: standard,
  transparent,
};
