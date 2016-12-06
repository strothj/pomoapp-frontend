<template lang="pug">
div(class="mdl-layout__tab-bar mdl-js-ripple-effect")
  tab-button(icon="view_list" href="#projects-list-tab" class="is-active")
  tab-button(icon="list" href="#tasks-list-tab")
  tab-button(icon="alarm" href="#pomodoro-clock-tab")
</template>

<script>
import TabButton from 'components/ProjectsPage/TabButton';

export default {
  components: {
    TabButton,
  },
};
</script>
