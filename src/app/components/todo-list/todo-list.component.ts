import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { NgIf, NgFor } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { InputComponent } from '../input/input.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FirstComponentComponent,
    InputComponent,
    ButtonComponent,
    NgIf,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(
    private listService: ListService,
    private formBuilder: FormBuilder
  ) {
    this.todos = this.listService.todos;
  }
  todos: Todo[];
  todoForm = this.formBuilder.group({
    name: '',
    expires_in: null,
    description: null,
  });

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString('pt-BR');
  }

  getTodoValidation(date: Date) {
    if (new Date(date) < new Date()) return 'tomato';
    else if (new Date(date) === new Date()) return 'orange';
    else return '#0d3ba5';
  }

  submitToDo() {
    if (!this.todoForm.value.name) return;

    let date = this.todoForm.value.expires_in
      ? new Date(this.todoForm.value.expires_in)
      : null;

    let offset = 3.0;
    let userDate = date
      ? new Date(date.getTime() + offset * 3600 * 1000)
      : null;

    this.listService.addTodo({
      id: new Date().getTime(),
      name: this.todoForm.value.name,
      expires_in: userDate,
      description: this.todoForm.value.description,
    });
    this.todos = this.listService.todos;
    this.todoForm.reset();
  }

  removeToDo(id: number) {
    this.listService.removeTodo(id);
    this.todos = this.listService.todos;
  }
}
