import Vuex from 'vuex';
import { state, getters } from './state';

export default () => new Vuex.Store({
  state,
  getters,
});
