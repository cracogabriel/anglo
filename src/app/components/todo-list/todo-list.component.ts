import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { NgIf, NgFor } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { InputComponent } from '../input/input.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
  todos: string[];
  todoForm = this.formBuilder.group({
    todo: '',
  });

  submitToDo() {
    if (!this.todoForm.value.todo) return;
    this.listService.addTodo(this.todoForm.value.todo);
    this.todos = this.listService.todos;
    this.todoForm.reset();
  }

  removeToDo(todo: string) {
    this.listService.removeTodo(todo);
    this.todos = this.listService.todos;
  }
}
