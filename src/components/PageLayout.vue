<template lang="pug">
div
  header
    navbar
  main
    slot

</template>

<script>
import Navbar from 'components/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

