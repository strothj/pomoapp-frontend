<template>
<div>
  <list-control title="Starred" category="favorites" sortable="true"></list-control>
  <list-control title="Projects" category="projects" sortable="true" editable="true"></list-control>

  <archived-list category="projects"></archived-list>

</div>
</template>

<script>
import ListControl from './ListControl';
import ArchivedList from './ArchivedList';

export default {
  components: {
    ListControl,
    ArchivedList,
  },
};
</script>
