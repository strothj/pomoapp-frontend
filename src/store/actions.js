import { LOGIN_PAGE } from 'src/router';
import { NAVIGATE_LOGIN_PAGE } from './action-types';

export default {
  [NAVIGATE_LOGIN_PAGE]({ state }) { // eslint-disable-line no-unused-vars
    state.router.push({ name: LOGIN_PAGE });
  },
};
