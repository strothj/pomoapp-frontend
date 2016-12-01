import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default ({ router }) => {
  state.router = router;
  return new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
  });
};
