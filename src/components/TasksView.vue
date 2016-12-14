<template>
<div>
  <list-control title="Tasks" category="tasks" editable="true" sortable="true"></list-control>

  <archived-list category="tasks"></archived-list>

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
