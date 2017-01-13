import ProjectsComponent from './projects.component';

export default [
  {
    path: '/projects',
    name: 'ProjectManager',
    component: ProjectsComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:projectId',
    name: 'TaskManager',
    component: ProjectsComponent,
    meta: { requiresAuth: true },
  },
];
