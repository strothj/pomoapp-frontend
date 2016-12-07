<template>
<div>
  <span class="md-title">{{ title }}</span>
  <md-list class="list md-transparent">
    <md-list-item v-for="item in items">
      <span>{{ item.name }}</span>
      <md-button class="md-icon-button md-list-action">
        <md-icon class="list__icon">{{ item | secondaryActionIcon }}</md-icon>
      </md-button>
    </md-list-item>
  </md-list>
</div>
</template>

<script>
export default {
  props: ['title', 'category'],
  filters: {
    secondaryActionIcon: function secondaryActionIcon(id) {
      if (this.editMode) {
        return 'drag_handle';
      }
      return this.items.favorited ? 'favorite' : 'favorite_border';
    },
  },
};
</script>
