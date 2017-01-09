import ProjectManagerComponent from './project-manager.component';
import TaskManagerComponent from './task-manager.component';

export default [
  {
    path: '/projects',
    name: 'ProjectManager',
    component: ProjectManagerComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:projectId',
    name: 'TaskManager',
    component: TaskManagerComponent,
    meta: { requiresAuth: true },
  },
];
