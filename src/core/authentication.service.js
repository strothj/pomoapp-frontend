import { WebAuth } from 'auth0-js';

const config = {
  domain: 'strothj.auth0.com',
  clientID: 'HwPnluOgfWiaUSQ24lS41dUW0bdQDCD9',
  callbackURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://pomoapp.site/',
  responseType: 'token',
};

class AuthenticationService {
  constructor() {
    this.auth0 = new WebAuth(config);
  }

  signup(email, password) {
    return new Promise((resolve, reject) => {
      this.auth0.signup({
        connection: 'Username-Password-Authentication',
        email,
        password,
      }, (err) => {
        if (err) {
          if (!err.description) {
            reject('An unexpected error occurred.');
            return;
          }
          reject(err.description);
          return;
        }
        resolve();
      });
    });
  }
}

export { AuthenticationService };
