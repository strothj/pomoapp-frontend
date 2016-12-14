<template>
<div>
  <list-control title="Starred" category="favorites" sortable="true"></list-control>
  <list-control title="Projects" category="projects" sortable="true" editable="true"></list-control>
</div>
</template>

<script>
import ListControl from './ListControl';

export default {
  components: {
    ListControl,
  },
};
</script>
