import { Component, ViewChild } from '@angular/core';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { InputComponent } from '../input/input.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../../interfaces/todo';
import { ModalComponent } from '../modal/modal.component';

interface FormData {
  id?: number | null;
  name: string;
  expires_in: Date | null;
  description: string | null;
}
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FirstComponentComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    ModalComponent,
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
  @ViewChild(ModalComponent) modal!: ModalComponent;

  todos: Todo[];
  todoForm = this.formBuilder.group<FormData>({
    id: null,
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

    const todo = {
      id: this.todoForm.value.id ?? new Date().getTime(),
      name: this.todoForm.value.name,
      expires_in: userDate,
      description: this.todoForm.value.description,
    };

    if (this.todoForm.value.id) this.listService.replace(todo);
    else this.listService.addTodo(todo);
    this.todos = this.listService.todos;
    this.todoForm.reset();
    this.modal.toggle();
  }

  removeToDo(id: number) {
    this.listService.removeTodo(id);
    this.todos = this.listService.todos;
  }

  handleEdit(todo: Todo) {
    this.todoForm.setValue({
      id: todo.id,
      name: todo.name,
      description: todo.description ?? null,
      expires_in: todo.expires_in ?? null,
    });
    this.modal.toggle();
  }
}
