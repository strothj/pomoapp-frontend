import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

import favorites from './modules/favorites';
import projects from './modules/projects';
import sorts from './modules/sorts';
import user from './modules/user';

export default ({ router }) => {
  state.router = router;
  return new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    modules: {
      favorites,
      projects,
      sorts,
      user,
    },
  });
};
