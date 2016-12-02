/* eslint-disable import/prefer-default-export */
import { mockRequestWrapper } from './development-mock-data';

export async function loginUsingPassword(authClient, username, password) {
  mockRequestWrapper(authClient);
  return authClient.owner.getToken(username, password);
}
