import { createReducer, on } from '@ngrx/store';
import { Task } from './task.model';
import { 
  addTask, 
  removeTask, 
  completeTask, 
  addPersonToTask, 
  removePersonFromTask, 
  addSkillToPerson, 
  removeSkillFromPerson,
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  addTaskSuccess,
  incompleteTask,
  removeAllTask,
} from './task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    tasks: [...state.tasks, task]
  })),
  on(addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(removeAllTask, (state) => ({
    ...state,
    tasks: []
  })),
  on(removeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(completeTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    )
  })),
  on(incompleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === id ? { ...task, completed: false } : task
    )
  })),
  on(addPersonToTask, (state, { taskId, person }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === taskId 
      ? { ...task, people: [...task.people, person] } 
      : task
    )
  })),
  on(removePersonFromTask, (state, { taskId, personId }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === taskId 
      ? { ...task, people: task.people.filter(person => person.id !== personId) } 
      : task
    )
  })),
  on(addSkillToPerson, (state, { taskId, personId, skill }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === taskId 
      ? { 
          ...task, 
          people: task.people.map(person => 
            person.id === personId 
            ? { ...person, skills: [...person.skills, skill] } 
            : person
          ) 
        } 
      : task
    )
  })),
  on(removeSkillFromPerson, (state, { taskId, personId, skillId }) => ({
    ...state,
    tasks: state.tasks.map(task => 
      task.id === taskId 
      ? { 
          ...task, 
          people: task.people.map(person => 
            person.id === personId 
            ? { 
                ...person, 
                skills: person.skills.filter(skill => skill.id !== skillId) 
              } 
            : person
          ) 
        } 
      : task
    )
  })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks,
  })),
  on(loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
