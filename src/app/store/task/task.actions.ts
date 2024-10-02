import { createAction, props } from '@ngrx/store';
import { Task, Person, Skill } from './task.model';

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: Task }>()
);

// Acción para indicar que se agregó la tarea exitosamente
export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ task: Task }>()
);

export const removeTask = createAction(
  '[Task] Remove Task',
  props<{ id: number }>()
);

export const removeAllTask = createAction(
  '[Task] AllRemove Task',
);

export const completeTask = createAction(
  '[Task] Complete Task',
  props<{ id: number }>()
);

export const incompleteTask = createAction(
  '[Task] Incomplete Task',
  props<{ id: number }>()
);

// Acciones para gestionar personas
export const addPersonToTask = createAction(
  '[Task] Add Person',
  props<{ taskId: number; person: Person }>()
);

export const removePersonFromTask = createAction(
  '[Task] Remove Person',
  props<{ taskId: number; personId: number }>()
);

// Acciones para gestionar habilidades
export const addSkillToPerson = createAction(
  '[Task] Add Skill to Person',
  props<{ taskId: number; personId: number; skill: Skill }>()
);

export const removeSkillFromPerson = createAction(
  '[Task] Remove Skill from Person',
  props<{ taskId: number; personId: number; skillId: number }>()
);

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: any }>()
);

