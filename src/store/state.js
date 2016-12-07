import ClientOAuth2 from 'client-oauth2';

const authClient = new ClientOAuth2({
  accessTokenUri: 'https://pomoapp.site/api/v1/oauth/token',
  scopes: ['projects'],
});

export default {
  authClient,
  authToken: null,
  loginError: '',
  user: null,
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
  selectedProject: {
    id: '123',
    name: 'Tic Tac Toe',
    tasks: [
      { id: '445', name: 'Create landing page' },
      { id: '556', name: 'Fix CSS Styles' },
      { id: '568', name: 'Update README.md' },
    ],
  },
  favoritedItems: [
    { id: '124', name: 'Battleship Game', href: '/projects/124' },
    { id: '445', name: 'Create landing page', href: '/projects/123/pomodoro' },
  ],
  editMode: false,
};
