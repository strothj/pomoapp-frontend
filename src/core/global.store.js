import { AuthenticationService } from './authentication.service';

export default {
  actions: {
    async SUBMIT_SIGNUP({ commit, dispatch, state }, { email, password }) {
      try {
        await state.authenticationService.signup(email, password);
        dispatch('LOGIN_WITH_PASSWORD', {
          email, password,
        });
      } catch (err) {
        commit('authError', err);
      }
    },

    SIGNUP_ERROR_DISPLAYED({ commit }) {
      commit('authError', null);
    },

    async LOGIN_WITH_PASSWORD({ commit, state }, { email, password }) {
      try {
        const profile = await state.authenticationService.signin(email, password);
        commit('profile', profile);
      } catch (err) {
        commit('authError', err);
      }
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    profile(state, profile) { state.profile = profile; },
    authError(state, message) { state.authError = message; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    authenticationService: new AuthenticationService(),
    profile: null,
    authError: null,
  },
};
