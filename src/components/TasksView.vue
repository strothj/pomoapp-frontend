<template>
<div>
  <list-control title="Tasks" category="tasks" editable="true" sortable="true"></list-control>
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
