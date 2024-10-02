import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  addTask,
  addPersonToTask,
  addSkillToPerson,
  completeTask,
  removeTask,
  removePersonFromTask,
  removeSkillFromPerson,
  loadTasksSuccess,
  loadTasksFailure,
  loadTasks,
  addTaskSuccess,
} from './task.actions';
import { Task } from './task.model';

@Injectable()
export class TaskEffects {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Cambia esta URL a la de tu API

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}

  // Cargar tareas desde la API
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.http.get<Task[]>(this.apiUrl).pipe(
          map((tasks) => loadTasksSuccess({ tasks })), // Carga exitosa
          catchError((error) => of(loadTasksFailure({ error }))) // Error en carga
        )
      )
    )
  );
/*
  // Agregar una nueva tarea a través de la API
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask), // Escucha la acción de agregar tarea
      map(({ task }) => {
        // Aquí simplemente retornamos la acción para agregar la tarea al estado
        return addTaskSuccess({ task }); // Asume que tienes una acción para el éxito de agregar la tarea
      })
    )
  );

  // Marcar tarea como completada
  completeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(completeTask),
      mergeMap(({ id }) =>
        this.http.patch<Task>(`${this.apiUrl}/${id}`, { completed: true }).pipe(
          map((updatedTask) => addTask({ task: updatedTask })), // Tarea actualizada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al completar
        )
      )
    )
  );

  // Eliminar tarea a través de la API
  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeTask),
      mergeMap(({ id }) =>
        this.http.delete(`${this.apiUrl}/${id}`).pipe(
          map(() => removeTask({ id })), // Tarea eliminada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al eliminar
        )
      )
    )
  );

  // Agregar persona a una tarea
  addPersonToTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPersonToTask),
      mergeMap(({ taskId, person }) =>
        this.http.patch<Task>(`${this.apiUrl}/${taskId}`, { person }).pipe(
          map((updatedTask) => addPersonToTask({ taskId, person })), // Persona agregada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al agregar persona
        )
      )
    )
  );

  // Agregar habilidad a una persona
  addSkillToPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSkillToPerson),
      mergeMap(({ taskId, personId, skill }) =>
        this.http.patch<Task>(`${this.apiUrl}/${taskId}/people/${personId}`, { skill }).pipe(
          map((updatedTask) => addSkillToPerson({ taskId, personId, skill })), // Habilidad agregada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al agregar habilidad
        )
      )
    )
  );

  // Eliminar persona de una tarea
  removePersonFromTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removePersonFromTask),
      mergeMap(({ taskId, personId }) =>
        this.http.delete(`${this.apiUrl}/${taskId}/people/${personId}`).pipe(
          map(() => removePersonFromTask({ taskId, personId })), // Persona eliminada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al eliminar persona
        )
      )
    )
  );

  // Eliminar habilidad de una persona
  removeSkillFromPerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeSkillFromPerson),
      mergeMap(({ taskId, personId, skillId }) =>
        this.http.delete(`${this.apiUrl}/${taskId}/people/${personId}/skills/${skillId}`).pipe(
          map(() => removeSkillFromPerson({ taskId, personId, skillId })), // Habilidad eliminada
          catchError((error) => of(loadTasksFailure({ error }))) // Error al eliminar habilidad
        )
      )
    )
  );*/
}
