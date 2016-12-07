import { mockRequestWrapper } from './development-mock-data';

export function loginUsingPassword(authClient, username, password) {
  mockRequestWrapper(authClient);
  return authClient.owner.getToken(username, password);
}

export function loginUsingRefreshToken(authClient, refreshToken) {
  mockRequestWrapper(authClient);
  const token = authClient.createToken('', refreshToken);
  return token.refresh();
}

/* eslint-disable no-unused-vars */
export function getUser(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        fullName: 'Bob Doe',
        emailAddress: 'bob@example.com',
        avatar: 'https://placeimg.com/64/64/people/8',
      });
    }, 100);
  });
}

export function getProjects(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
          { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
          { id: '125', name: 'Emails', favorited: false, href: '/projects/125' },
        ],
        projectsListOrder: null,
        favorites: [
          { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
          { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
        ],
        favoritesListOrder: null,
      });
    }, 100);
  });
}

export function deleteRefreshToken() {
  document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

export function loadRefreshToken() {
  return new Promise((resolve, reject) => {
    let refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    refreshToken = decodeURIComponent(refreshToken);
    if (!refreshToken) {
      reject('no cookie');
      return;
    }
    resolve(refreshToken);
  });
}

export function storeRefreshToken(refreshToken) {
  const security = process.env.NODE_ENV === 'development' ? '' : ';secure';
  const encodedToken = encodeURIComponent(refreshToken);
  const cookie = `authToken=${encodedToken};path=/;max-age=7776000${security}`;
  document.cookie = cookie;
}
