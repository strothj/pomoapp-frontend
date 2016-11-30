<template lang="pug">
div(class="mdl-layout__tab-bar mdl-js-ripple-effect")
  tab-button(icon="view_list")
  tab-button(icon="list")
  tab-button(icon="alarm")
</template>

<script>
import TabButton from 'components/ProjectsPage/TabButton';

export default {
  components: {
    TabButton,
  },
};
</script>
