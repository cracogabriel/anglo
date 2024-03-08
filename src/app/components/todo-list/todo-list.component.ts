import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FirstComponentComponent,
    InputComponent,
    ButtonComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private listService: ListService) {}

  foo = 'fighters';
  title = 'anglo';
  isShowingSalve = false;
  text = '';

  todos = this.listService.todos;

  mandarSalve() {
    this.isShowingSalve = !this.isShowingSalve;
  }

  submitToDo() {
    this.listService.addTodo(this.text);
    this.text = '';
    this.todos = this.listService.todos;
  }

  removeToDo(todo: string) {
    this.listService.removeTodo(todo);
    this.todos = this.listService.todos;
  }

  onChange(value: string) {
    this.text = value;
  }
}
