<template>
<md-toolbar class="profile-toolbar">
  <md-list class="md-transparent">
    <profile-menu>
      <md-list-item>
        <div class="profile-toolbar__user-info md-list-text-container">
          <span>{{ userFullName }}</span>
          <span>{{ userEmailAddress }}</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </md-list-item>
    </profile-menu>

  </md-list>
</md-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileMenu from './ProfileMenu';

export default {
  computed: {
    ...mapGetters(['userFullName', 'userEmailAddress']),
  },
  components: {
    ProfileMenu,
  },
};
</script>

<style lang="less">
.profile-toolbar {
  &__user-info > :nth-child(2) {
    color: fadeout(white, 55%);
  }
}
</style>
