<template>
  <md-dialog-prompt
    :md-title="title"
    :md-placeholder="placeholder"
    v-model="value"
    @close="close"
    ref="dialogPrompt">
  </md-dialog-prompt>
</template>

<script>
export default {
  props: [
    'title',
    'placeholder',
  ],

  data() {
    return {
      value: '',
      startingValue: '',
    };
  },

  methods: {
    close(state) {
      if (state !== 'ok') return;
      if (this.value.length === 0) return;
      if (this.value === this.startingValue) return;
      this.$emit('submit', this.value);
    },

    open(startingValue) {
      this.value = startingValue;
      this.startingValue = startingValue;
      this.$refs.dialogPrompt.open();
    },
  },
};
</script>
