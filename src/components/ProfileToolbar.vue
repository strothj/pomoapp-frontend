<template>
<md-toolbar class="md-account-header">
  <md-list class="md-transparent">
    <md-list-item class="md-avatar-list" disabled>
      <md-avatar class="md-large"><img :src="userAvatar" alt="Profile Icon"></md-avatar>
    </md-list-item>

    <profile-menu>
      <md-list-item>
        <div class="md-list-text-container">
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
    ...mapGetters(['userFullName', 'userEmailAddress', 'userAvatar']),
  },
  components: {
    ProfileMenu,
  },
};
</script>
