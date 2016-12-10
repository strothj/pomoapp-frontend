<template>
<div>
  <div class="vertical-padding"></div>
  <list-control title="Tasks" category="tasks" editable="true" sortable="true"></list-control>

  <!-- Placeholder for future archived items list -->
  <img src="https://placehold.it/500x100?text=Archived+Items" alt="">
  <div class="vertical-padding"></div>
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
