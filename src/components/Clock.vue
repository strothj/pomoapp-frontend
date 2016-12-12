<template>
<canvas width="300" height="300" ref="clock"></canvas>
</template>

<script>
// Offset so that angles start from the top instead of the right.
const angleOrigin = (Math.PI / 2) * -1;

/* eslint-disable no-param-reassign */
function drawWorkArc({ canvas, ctx, lengthWork }, length) {
  const radius = canvas.height / 2;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#039BE5';
  ctx.arc(radius, radius, radius - 10, angleOrigin, length + angleOrigin);
  ctx.stroke();
}

/* eslint-disable */
function renderClock(state) {
  const { canvas, ctx, lengthWork, lengthBreak, workSeconds } = state;
  const anglePerSecond = Math.PI * 2 / (lengthWork + lengthBreak + 10);
  // console.log(anglePerSecond);
  const angleWork = Math.PI * 2
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWorkArc(state, anglePerSecond * workSeconds);
}

export default {
  props: [],

  data() {
    return {
      state: null,
    };
  },

  computed: {
  },

  methods: {
  },

  mounted() {
    const canvas = this.$refs.clock;
    const ctx = canvas.getContext('2d');
    this.state = {
      canvas,
      ctx,
      lengthWork: 1500,
      lengthBreak: 300,
    };
    let seconds = 0;
    setInterval(() => {
      const state = Object.assign({}, this.state);
      state.workSeconds = seconds;
      renderClock(state);
      seconds += 1;
      if (seconds > 1500) seconds = 0;
    }, 1);
  },
};
</script>
