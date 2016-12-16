const clientID = 'HwPnluOgfWiaUSQ24lS41dUW0bdQDCD9';
const rootURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://pomoapp.site/';

function createAuth0Client() {
  return new Auth0({
    domain: 'strothj.auth0.com',
    clientID,
    callbackURL: rootURL,
    responseType: 'token',
  });
}

function storeCookie(name, data) {
  const security = process.env.NODE_ENV === 'development' ? '' : ';secure';
  const encodedData = encodeURIComponent(data);
  const cookie = `${name}=${encodedData};path=/;max-age=7776000${security}`;
  document.cookie = cookie;
}

function retrieveCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookie = parts.pop().split(';').shift();
    return decodeURIComponent(cookie);
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function setLoggedOutState(commit) {
  const removeCookie = { remove: true };
  commit('AUTH_TOKEN', removeCookie);
  commit('PROFILE', removeCookie);
  commit('AUTHENTICATED', { authenticated: false });
}

export default {
  actions: {
    BOOTSTRAP_LOGIN({ commit, dispatch, getters, state }) {
      function setLoggedInState(authToken, profile) {
        commit('AUTH_TOKEN', { authToken });
        commit('PROFILE', { profile });
        commit('AUTHENTICATED', { authenticated: true });
        dispatch('LOGGED_IN');
      }

      function loadSavedSession() {
        const authToken = retrieveCookie('authToken');
        const profile = JSON.parse(retrieveCookie('profile'));
        if (authToken && profile) setLoggedInState(authToken, profile);
      }

      function handleAuthenticationError(err) {
        console.log('authentication error', err); // eslint-disable-line
        setLoggedOutState(commit);
        commit('LOGIN_ERROR', { loginError: err.toString() });
      }

      loadSavedSession();
      const lock = getters.lock;

      lock.on('authenticated', (authResult) => {
        state.auth0.getUserInfo(authResult.accessToken, (err, profile) => {
          if (err) {
            handleAuthenticationError(err);
            return;
          }
          setLoggedInState(authResult.accessToken, profile);
        });
      });

      lock.on('authorization_error', handleAuthenticationError);
    },

    LOG_OFF({ commit, state }) {
      setLoggedOutState(commit);
      state.auth0.logout({ returnTo: rootURL, client_id: clientID }, { version: 'v2' });
    },
  },

  getters: {
    authenticated(state) { return state.authenticated; },
    authToken(state) { return state.authToken; },
    lock(state) { return state.lock; },
    loginError(state) { return state.loginError; },
    profile(state) { return state.profile; },
    userFullName(state) { return state.profile.name; },
    userEmailAddress(state) { return state.profile.email; },
  },

  mutations: {
    /* eslint-disable no-param-reassign */
    AUTHENTICATED(state, { authenticated }) { state.authenticated = authenticated; },
    AUTH_TOKEN(state, { authToken, remove }) {
      if (remove) {
        deleteCookie('authToken');
        return;
      } else if (authToken) {
        storeCookie('authToken', authToken);
        state.authToken = authToken;
      }
    },
    LOGIN_ERROR(state, { loginError }) { state.loginError = loginError; },
    PROFILE(state, { profile, remove }) {
      if (remove) {
        deleteCookie('profile');
        return;
      } else if (profile) {
        storeCookie('profile', JSON.stringify(profile));
        state.profile = profile;
      }
    },
    /* eslint-enable no-param-reassign */
  },

  state: {
    auth0: createAuth0Client(),
    authToken: null,
    authenticated: false,
    lock: new Auth0Lock(clientID, 'strothj.auth0.com'),
    loginError: '',
    profile: { name: '', email: '' },
  },
};
