import { Authentication, WebAuth } from 'auth0-js';
import axios from 'axios';

const clientID = 'HwPnluOgfWiaUSQ24lS41dUW0bdQDCD9';
const connection = 'Username-Password-Authentication';

const config = {
  domain: 'strothj.auth0.com',
  clientID,
  callbackURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://pomoapp.site/',
  responseType: 'token',
};

function parseApiError(err, reject) {
  console.log('err', err); // eslint-disable-line
  if (!err.description) {
    reject('An unexpected error occurred.');
    console.log(err); // eslint-disable-line
    return;
  }
  reject(err.description);
}

class AuthenticationService {
  constructor() {
    this.webAuth = new WebAuth(config);
    this.auth0 = new Authentication({
      domain: config.domain,
      clientID: config.clientID,
    });
  }

  getProfile(authResult) {
    return new Promise((resolve, reject) => {
      this.auth0.userInfo(authResult.access_token, (err, profile) => {
        if (err) {
          parseApiError(err, reject);
          return;
        }
        resolve(profile);
      });
    });
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
        console.log('response', res); // eslint-disable-line
        resolve(await this.getProfile(res.data));
      } catch (err) {
        parseApiError(err, reject);
      }
    });
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
}

export { AuthenticationService };
