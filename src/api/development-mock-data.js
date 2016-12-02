/* eslint-disable import/prefer-default-export */
let mockRequestWrapperFunc;

async function handleTokenRequest() {
  let response = {};
  response = {
    status: 400,
    body: {
      access_token: '123',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: '456',
    },
  };
  return response;
}

// Wraps the request method used by the OAuth2 client. It returns mock data
// instead of making a real web request.
export async function mockRequestWrapper(authClient) {
  if (process.env.NODE_ENV !== 'development') return;
  if (authClient.request === mockRequestWrapperFunc) return;

  mockRequestWrapperFunc = (method, url, body, headers) => {
    console.log(`method: ${method}\nurl: ${url}\nbody: ${body}\nheaders: ${headers}`); // eslint-disable-line no-console

    const request = { method, url, body, headers };
    let response;

    switch (url) {
      case 'https://pomoapp.site/api/v1/oauth/access_token': response = handleTokenRequest(request); break;
      default: response = handleTokenRequest(); break;
    }

    // Return api response with added latency.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 100);
    });
  };
  authClient.request = mockRequestWrapperFunc; // eslint-disable-line no-param-reassign
}
