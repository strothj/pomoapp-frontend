import ProjectsPageComponent from './projects-page.component';

export default [
  {
    path: '/',
    name: 'ProjectManager',
    component: ProjectsPageComponent,
    meta: { requiresAuth: true },
  },
  {
    path: ':projectId',
    name: 'TaskManager',
    component: ProjectsPageComponent,
    meta: { requiresAuth: true },
  },
];
