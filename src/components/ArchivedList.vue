<template>
<div>
  <md-button class="md-primary md-dense" v-md-theme="'popupMenu'"
    style="width: 90%" @click="showArchived = !showArchived">
    <span v-if="!showArchived">Show</span>
    <span v-else>Hide</span>
    <span>archived {{ category }}</span>
  </md-button>

  <list-control :category="category" v-if="showArchived" editable="true" archiveView="true"></list-control>

  <div class="vertical-padding"></div>
</div>
</template>

<script>
import ListControl from './ListControl';

export default {
  props: ['category'],
  data() {
    return {
      showArchived: false,
    };
  },
  components: {
    ListControl,
  },
};
</script>
