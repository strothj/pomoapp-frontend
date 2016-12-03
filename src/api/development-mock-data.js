/* eslint-disable import/prefer-default-export */
import queryString from 'query-string';

const invalidUsernamePasswordResponse = {
  status: 400,
  body: JSON.stringify({
    error: 'invalid_grant',
  }),
};

const validUsernamePasswordResponse = {
  status: 200,
  body: JSON.stringify({
    access_token: '123',
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: '456',
  }),
};

function handleTokenRequest(request) {
  const body = queryString.parse(request.body);
  if (body.username !== 'bob@example.com' || body.password !== '123') return invalidUsernamePasswordResponse;
  return validUsernamePasswordResponse;
}

let mockRequestWrapperFunc;

// Wraps the request method used by the OAuth2 client. It returns mock data
// instead of making a real web request.
export function mockRequestWrapper(authClient) {
  if (process.env.NODE_ENV !== 'development') return;
  if (authClient.request === mockRequestWrapperFunc) return;

  mockRequestWrapperFunc = (method, url, body, headers) => {
    console.log(`method: ${method}\nurl: ${url}\nbody: ${body}\nheaders: ${headers}`); // eslint-disable-line no-console

    const request = { method, url, body, headers };
    let response;

    switch (url) {
      case 'https://pomoapp.site/api/v1/oauth/access_token': response = handleTokenRequest(request); break;
      default: response = { status: 404 }; break;
    }

    // Return api response with added latency.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 200);
    });
  };
  authClient.request = mockRequestWrapperFunc; // eslint-disable-line no-param-reassign
}
