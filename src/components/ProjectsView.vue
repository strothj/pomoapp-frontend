<template>
<div>
  <div class="vertical-padding"></div>
  <list-control title="Starred" category="favorites" sortable="true"></list-control>
  <div class="vertical-padding"></div>
  <list-control title="Projects" category="projects" sortable="true" editable="true"></list-control>
  <div class="vertical-padding"></div>

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
