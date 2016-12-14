import latency from '../latency';

export default {
  actions: {
    async LOGIN_WITH_PASSWORD({ commit, dispatch }, cred) {
      await latency();
      if (cred.username !== 'bob@example.com' || cred.password !== '123') {
        commit('LOGIN_ERROR', 'Email or password is incorrect');
        return;
      }
      commit('AUTH_TOKEN', '123');
      dispatch('LOGGED_IN');
      if (cred.remember) dispatch('STORE_REFRESH_TOKEN', { refreshToken: '456' });
    },

    LOGIN_ERROR_HANDLED: ({ commit }) => {
      commit('LOGIN_ERROR', null);
    },

    async LOGIN_WITH_TOKEN({ commit, dispatch, getters }) {
      let refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      refreshToken = decodeURIComponent(refreshToken);
      await latency();
      if (refreshToken !== '456') {
        await dispatch('REMOVE_REFRESH_TOKEN');
        const currentRoute = getters.router.currentRoute.name;
        if (currentRoute !== 'Root') {
          getters.router.push({ name: 'LoginView' });
        }
        return;
      }
      commit('AUTH_TOKEN', '123');
      dispatch('LOGGED_IN');
    },

    async LOGGED_IN({ commit, getters }) {
      await latency();
      commit('USER', {
        fullName: 'Bob Doe',
        emailAddress: 'bob@example.com',
      });
      const currentRoute = getters.router.currentRoute.name;
      if (currentRoute === 'Root' || currentRoute === 'LoginView') {
        getters.router.push({ name: 'ProjectsView' });
      }
    },

    async LOG_OFF({ commit, dispatch, getters }) {
      await latency();
      dispatch('REMOVE_REFRESH_TOKEN');
      commit('AUTH_TOKEN', null);
      getters.router.push({ name: 'LoginView' });
    },

    STORE_REFRESH_TOKEN(state, { refreshToken }) {
      const security = process.env.NODE_ENV === 'development' ? '' : ';secure';
      const encodedToken = encodeURIComponent(refreshToken);
      const cookie = `authToken=${encodedToken};path=/;max-age=7776000${security}`;
      document.cookie = cookie;
    },

    async REMOVE_REFRESH_TOKEN() {
      document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },

  getters: {
    authToken: state => state.authToken,
    loginError: state => state.loginError,
    userFullName: state => state.user.fullName,
    userEmailAddress: state => state.user.emailAddress,
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    AUTH_TOKEN: (state, authToken) => { state.authToken = authToken; },
    LOGIN_ERROR: (state, loginError) => { state.loginError = loginError; },
    USER: (state, user) => { state.user = user; },
    /* eslint-enable no-param-reassign */
  },

  state: {
    authToken: null,
    loginError: '',
    user: { fullName: '', emailAddress: '' },
  },
};
