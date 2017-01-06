import { AuthenticationService } from './authentication.service';

const globalStore = {
  actions: {
    async SUBMIT_SIGNUP({ commit, dispatch, state }, { email, password }) {
      try {
        await state.authenticationService.signup(email, password);
        dispatch('LOGIN_WITH_PASSWORD', {
          email, password,
        });
      } catch (err) {
        commit('signupError', err);
      }
    },

    SIGNUP_ERROR_DISPLAYED({ commit }) {
      commit('signupError', null);
    },

    // LOGIN_WITH_PASSWORD({ commit }) {

    // },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    signupError(state, message) {
      state.signupError = message;
    },
    /* eslint-enable no-param-reassign */
  },

  state: {
    authenticationService: new AuthenticationService(),
    signupError: null,
  },
};

export { globalStore };
