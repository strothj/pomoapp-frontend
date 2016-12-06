<template lang="pug">
dialog(class="mdl-dialog")
  h4 {{ operation }} Project
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      operation: 'projectEditOperation',
      visible: 'projectEditVisible',
    }),
  },
};
</script>

