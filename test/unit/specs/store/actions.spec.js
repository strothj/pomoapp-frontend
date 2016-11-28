import actions from 'src/store/actions';
import { NAVIGATE_LOGIN_PAGE } from 'src/store/action-types';
import { LOGIN_PAGE } from 'src/router/route-types';

describe('actions', () => {

  describe(NAVIGATE_LOGIN_PAGE, () => {

    it('sets location to LoginPage', (done) => {
      const state = {
        router: {
          push(location) {
            location.should.deep.equal({ name: LOGIN_PAGE });
            done();
          },
        },
      };

      actions[NAVIGATE_LOGIN_PAGE]({ state });
    });

  });

});
