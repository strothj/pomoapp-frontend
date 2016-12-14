<template>
<md-list class="md-transparent" ref="list"><slot></slot></md-list>
</template>

<script>
/* eslint-disable */
import Sortable from 'sortablejs';
import uniqueId from 'lodash.uniqueid';

export default {
  mixins: ['md-list'],

  props: ['handle', 'dataIdAttr', 'sortOrder'],

  data() {
    return {
      // sortablejs instance
      sortableJs: null,
      /**
       * create a unique element id to be used by this list instance of the form
       * "sortable-list-0"
       **/
      sortableId: uniqueId('sortable-list-'),
    };
  },

  computed: {
  },

  methods: {
  },

  mounted() {
    this.sortableJs = new Sortable(this.$refs.list.$el, {
      handle: this.handle,
      dataIdAttr: this.dataIdAttr,
      draggable: '.md-list-item',
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
