import SignupPageComponent from './signup-page.component';
import SigninPageComponent from './signin-page.component';

export default [
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPageComponent,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninPageComponent,
  },
];
