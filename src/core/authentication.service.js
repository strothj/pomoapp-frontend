import { Authentication, WebAuth } from 'auth0-js';
import axios from 'axios';

const clientID = 'HwPnluOgfWiaUSQ24lS41dUW0bdQDCD9';
const connection = 'Username-Password-Authentication';
const rootUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://pomoapp.site';

const config = {
  domain: 'strothj.auth0.com',
  clientID,
  callbackURL: rootUrl,
  responseType: 'token',
};

function parseApiError(err, reject) {
  console.log('AuthenticationService: ', err); // eslint-disable-line
  if (err.response) {
    if (err.response.status === 401) {
      reject('Email or password is incorrect');
      return;
    }
    if (err.description) {
      reject(err.description);
      return;
    }
  }

  reject('An unexpected error occurred.');
}

class AuthenticationService {
  constructor() {
    this.webAuth = new WebAuth(config);
    this.auth0 = new Authentication({
      domain: config.domain,
      clientID: config.clientID,
    });
    this.idToken = null; // JWT token
  }

  storeToken() {
    const security = process.env.NODE_ENV === 'development' ? '' : ';secure';
    const encodedData = encodeURIComponent(this.idToken);
    const cookie = `auth=${encodedData};path=/;max-age=7776000${security}`;
    document.cookie = cookie;
  }

  loadToken() {
    const value = `; ${document.cookie}`;
    const parts = value.split('; auth=');
    if (parts.length === 2) {
      const cookie = parts.pop().split(';').shift();
      this.idToken = decodeURIComponent(cookie);
      return;
    }
    this.clearToken();
  }

  clearToken() {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    this.idToken = null;
  }

  async getProfile() {
    const res = await axios.post(`https://${config.domain}/tokeninfo`, {
      id_token: this.idToken,
    });
    return res.data;
  }

  signin(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`https://${config.domain}/oauth/ro`, {
          client_id: clientID,
          connection,
          grant_type: 'password',
          username: email,
          password,
          scope: 'openid',
        });
        this.idToken = res.data.id_token;
        this.storeToken();
        resolve(await this.getProfile());
      } catch (err) {
        parseApiError(err, reject);
      }
    });
  }

  async signinWithCookie() {
    this.loadToken();
    if (!this.idToken) return null;
    try {
      const profile = await this.getProfile();
      return profile;
    } catch (err) {
      // Login expired, ignoring error.
    }
    return null;
  }

  signOut() {
    this.clearToken();
  }

  signup(email, password) {
    return new Promise((resolve, reject) => {
      this.webAuth.signup({
        connection,
        email,
        password,
      }, (err) => {
        if (err) {
          parseApiError(err, reject);
          return;
        }
        resolve();
      });
    });
  }

  authenticatedClient() {
    return axios.create({
      baseURL: '/api/v1/',
      headers: {
        Authorization: `Bearer ${this.idToken}`,
      },
    });
  }
}

export { AuthenticationService };
