/* eslint-disable import/prefer-default-export */
let testAuthRequestWrapper;

// Wraps the request method used by the OAuth2 client. It replaces responses
// with mock data.
export function mockRequestWrapper(authClient) {
  if (process.env.NODE_ENV !== 'development') return;
  if (authClient.request === testAuthRequestWrapper) return;

  testAuthRequestWrapper = (method, url, body, headers) => {
    /* eslint-disable no-console */
    console.log(`method: ${method}
url: ${url}
body: ${body}
headers: ${headers}`);
    /* eslint-enable no-console */

    return Promise.resolve({
      status: 200,
      body: {
        access_token: '123',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: '456',
      },
    });
  };
  authClient.request = testAuthRequestWrapper; // eslint-disable-line no-param-reassign
}
