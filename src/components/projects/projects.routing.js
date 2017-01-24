import ProjectsComponent from './projects.component';
import ProjectsListComponent from './project-list/project-list.component';

export default {
  path: '/projects',
  component: ProjectsComponent,
  children: [
    {
      path: '/',
      name: 'ProjectsManager',
      component: ProjectsListComponent,
    },
  ],
};
