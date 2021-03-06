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

    SHOW_SERVICE_ERROR({ commit }, err) {
      console.error(err); // eslint-disable-line no-console
      commit('serviceError', true);
    },

    DISMISS_SERVICE_ERROR() {
      window.location.href = '/signin';
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
    serviceError(state, status) { state.serviceError = status; },

    demoMode(state, status) { state.demoMode = status; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    authenticationService: new AuthenticationService(),
    authenticated: false,
    profile: null,
    authError: null,
    serviceError: false,
    router: null,
    // Demo mode flag, used to reduce clock timers for demonstration purposes.
    demoMode: false,
  },
};
