/* eslint-disable no-unused-vars */
export function getProjects(token) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          { name: 'CCapstone Project', favorited: true, href: '/projects/123' },
          { name: 'Portfolio Website', favorited: true, href: '/projects/124' },
          { name: 'Emails', favorited: false, href: '/projects/125' },
        ],
        projectsSortOrder: null,
        favorites: [
          { id: '123', name: 'Capstone Project', favorited: true, href: '/projects/123' },
          { id: '124', name: 'Portfolio Website', favorited: true, href: '/projects/124' },
        ],
        favoritesSortOrder: '4jk|4g3',
      });
    }, 100);
  });
}

function setSortOrder(token, order, path) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('sortOrderUpdate:', path, order); // eslint-disable-line
      resolve();
    }, 100);
  });
}

export function setProjectsSortOrder(token, order) {
  return setSortOrder(token, order, 'projects');
}

export function setFavoritesSortOrder(token, order) {
  return setSortOrder(token, order, 'favorites');
}
