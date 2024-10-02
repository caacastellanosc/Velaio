import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { completeTask, incompleteTask, loadTasks, removeAllTask } from 'src/app/store/task/task.actions';
import { Task } from 'src/app/store/task/task.model';
import { selectAllTasks, selectCompletedTasks, selectPendingTasks } from 'src/app/store/task/tasl.selectors';



@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasks$: Observable<Task[]>;
  filteredTasks$: Observable<Task[]>;
  currentFilter: string = 'all';
  isvisible: boolean = false;
  constructor(
    private store: Store,
  ) {
    this.tasks$ = this.store.select(selectAllTasks);
    this.filteredTasks$ = this.tasks$.pipe(
      map(tasks => tasks.reverse()) 
    );
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.filterTasks(this.currentFilter);
  }

  filterTasks(filter: string): void {
    switch (filter) {
      case 'completed':
        this.filteredTasks$ = this.store.select(selectCompletedTasks);
        break;
      case 'pending':
        this.filteredTasks$ = this.store.select(selectPendingTasks);
        break;
      default:
        this.filteredTasks$ = this.tasks$; // Todas las tareas
        break;
    }
  }

  toggleTaskStatus(task: Task): void {

   if(task.completed) {
     this.store.dispatch(incompleteTask({ id: task.id }));
  }else{
     this.store.dispatch(completeTask({ id: task.id }));
   }

  }

  deleteall(): void {
    this.store.dispatch(removeAllTask());
  }
}
