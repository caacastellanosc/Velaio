import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/task/task.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isSubmitting: boolean = false;
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.taskForm = this.fb.group({
      id: [Date.now()],
      title: ['', [Validators.required, Validators.minLength(5)]],
      deadline: ['', Validators.required],
      people: this.fb.array([this.createPerson()])
    });
  }
  ngOnInit(): void {}


  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }


  createPerson(): FormGroup {
    return this.fb.group({
        id: [Date.now()],
        fullName: ['', [Validators.required, Validators.minLength(5)]],
        age: ['', [Validators.required, Validators.min(18)]],
        skills: this.fb.array([this.fb.control('', Validators.required)]) // Al menos una habilidad
    });
}

  addPerson() {
    const personForm = this.fb.group({
      id: [Date.now()],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.fb.control('', Validators.required)]) // Al menos una habilidad
    });

    this.people.push(personForm);
  }


  removePerson(index: number) {
    if (this.people.length > 1) { // Asegura que siempre haya al menos una persona
      this.people.removeAt(index);
  }
  }

 
  addSkill(personIndex: number) {
    const person = this.people.at(personIndex) as FormGroup;
    const skills = person.get('skills') as FormArray;
    skills.push(this.fb.control('', Validators.required));
  }


  removeSkill(personIndex: number, skillIndex: number) {
    const person = this.people.at(personIndex) as FormGroup;
    const skills = person.get('skills') as FormArray;
  
    // Solo eliminar si hay más de un elemento en skills
    if (skills.length > 1) {
      skills.removeAt(skillIndex);
    }
  }
  

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }
  
  resetForm() {
    this.taskForm.reset(); 
    this.people.clear(); 
    this.people.push(this.createPerson()); 
}


  saveTask() {
    if (this.taskForm.valid) {
      let task = this.taskForm.value;
      this.store.dispatch(addTask({ task }));
      this.resetForm();
      return;
    }

  }
}
