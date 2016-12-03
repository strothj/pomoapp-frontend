import ClientOAuth2 from 'client-oauth2';

const authClient = new ClientOAuth2({
  accessTokenUri: 'https://pomoapp.site/api/v1/oauth/access_token',
  scopes: ['projects'],
});

export default {
  authClient,
  authToken: null,
  projects: [
    {
      id: '123',
      name: 'Tic Tac Toe',
    },
    {
      id: '124',
      name: 'Battleship Game',
    },
    {
      id: '125',
      name: 'Work',
    },
  ],
  projectsListSortOrder: null,
};
