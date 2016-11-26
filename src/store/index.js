import Vuex from 'vuex';
import { getters, state } from './state';
import actions from './actions';

export default ({ router }) => {
  state.router = router;
  return new Vuex.Store({
    actions,
    getters,
    state,
  });
};
