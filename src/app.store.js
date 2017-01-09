import { AuthenticationService } from './core/authentication.service';

export default {
  actions: {
    async SUBMIT_SIGNUP({ commit, dispatch, state }, { email, password }) {
      try {
        await state.authenticationService.signup(email, password);
        dispatch('SIGNIN_WITH_PASSWORD', {
          email, password,
        });
      } catch (err) {
        commit('authError', err);
      }
    },

    SUBMIT_SIGNIN({ commit, dispatch, state }, { email, password }) {
      dispatch('SIGNIN_WITH_PASSWORD', {
        email, password,
      });
    },

    async SIGNIN_WITH_COOKIE({ dispatch, state }) {
      const profile = await state.authenticationService.signinWithCookie();
      if (profile) dispatch('AUTHENTICATED', { profile });
    },

    async SIGNIN_WITH_PASSWORD({ commit, dispatch, state }, { email, password }) {
      try {
        const profile = await state.authenticationService.signin(email, password);
        dispatch('AUTHENTICATED', { profile });
      } catch (err) {
        commit('authError', err);
      }
    },

    async SIGN_OUT({ commit, state }) {
      await state.authenticationService.signOut();
      commit('profile', null);
      commit('authenticated', false);
      state.router.push('/signin');
    },

    DISMISS_AUTH_ERROR({ commit }) {
      commit('authError', null);
    },

    AUTHENTICATED({ commit, state }, { profile }) {
      commit('profile', profile);
      commit('authenticated', true);
      state.router.push('/projects');
    },
  },

  getters: {
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    authenticated(state, status) { state.authenticated = status; },
    profile(state, profile) { state.profile = profile; },
    authError(state, message) { state.authError = message; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    authenticationService: new AuthenticationService(),
    authenticated: false,
    profile: null,
    authError: null,
    router: null,
  },
};
