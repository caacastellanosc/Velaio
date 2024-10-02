import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutes } from './task.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutes
  ],
  declarations: [
    TaskComponent,
    TasklistComponent,
    TaskFormComponent
  ],
  exports: [RouterModule]
})
export class TaskModule { }
