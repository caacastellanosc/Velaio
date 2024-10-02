import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  },
  { path: '', redirectTo: 'task', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'task' }, // Redirige cualquier ruta no reconocida a /tasks
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
