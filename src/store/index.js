import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

import favorites from './modules/favorites';
import projects from './modules/projects';
import sorts from './modules/sorts';
import tasks from './modules/tasks';
import user from './modules/user';
import { clockStore } from '../clock';

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
      tasks,
      user,
      clock: clockStore,
    },
  });
};
