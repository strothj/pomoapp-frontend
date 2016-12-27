<template>
<md-list class="md-transparent" ref="list"><slot></slot></md-list>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  mixins: ['md-list'],

  props: ['handle', 'dataIdAttr', 'sortOrder'],

  data() {
    return {
      sortableJs: null, // sortablejs instance
    };
  },

  computed: {
  },

  methods: {
  },

  updated() {
    this.$nextTick(() => {
      this.sortableJs.sort(this.sortOrder);
    });
  },

  mounted() {
    this.sortableJs = new Sortable(this.$refs.list.$el, {
      handle: this.handle,
      dataIdAttr: this.dataIdAttr,
      forceFallback: true,
      store: {
        get: () => (this.sortOrder),
        set: (sortable) => {
          this.$emit('sortChanged', {
            sortOrder: sortable.toArray(),
          });
        },
      },
    });
  },
};
</script>
