import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  {
    path: '',
    component: TasklistComponent,
  }
];

export const TaskRoutes = RouterModule.forChild(routes);
