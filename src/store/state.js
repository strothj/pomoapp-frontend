import ClientOAuth2 from 'client-oauth2';

const authClient = new ClientOAuth2({
  accessTokenUri: 'https://pomoapp.site/api/v1/oauth/token',
  scopes: ['projects'],
});

export default {
  authClient,
  authToken: null,
  loginError: '',
  editMode: false,
  selectedProject: null,
  user: null,
  projects: null,
  projectsListSortOrder: null,
  favorites: null,
  favoritesSortOrder: null,
};
