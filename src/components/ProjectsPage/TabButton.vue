<template lang="pug">
a(href="#" class="mdl-layout__tab")
  button(class="mdl-button mdl-js-button mdl-button--icon")
    i(class="material-icons") {{ icon }}
</template>

<script>
export default {
  props: ['icon'],
};
</script>
