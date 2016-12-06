<template lang="pug">
li(class="mdl-list__item")
  span(class="mdl-list__item-primary-content")
    slot
  i(
    class="material-icons mdl-list__item-icon"
    ":class"="[sortableClass]"
    ":style"="styles"
  ) reorder
</template>

<script>
export default {
  data: () => ({
    styles: {
      cursor: 'move',
    },
  }),
  props: ['sortableClass'],
};
</script>
