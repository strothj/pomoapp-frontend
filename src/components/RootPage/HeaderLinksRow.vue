<template lang="pug">
div(class="mdl-layout__header-row")
  div(class="mdl-layout-spacer")
  navigation-links
</template>

<script>
import NavigationLinks from './NavigationLinks';

export default {
  components: {
    NavigationLinks,
  },
};
</script>
