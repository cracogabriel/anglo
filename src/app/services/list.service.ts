import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  todos: Array<string> = [];

  removeTodo(todoToRemove: string) {
    this.todos = this.todos.filter((todo) => todo !== todoToRemove);
  }
  addTodo(todoToRemove: string) {
    this.todos.push(todoToRemove);
  }
}
