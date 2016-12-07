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
  projects: null,
  projectsListSortOrder: null,
  selectedProject: null,
  favorites: null,
  editMode: false,
};
