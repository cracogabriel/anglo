import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../interfaces/todo';

const LOCAL_STORAGE_TODO_KEY = '@todos';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private localStorageService: LocalStorageService) {}

  todos: Array<Todo> = JSON.parse(
    this.localStorageService.get(LOCAL_STORAGE_TODO_KEY) ?? '[]'
  );

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.localStorageService.set(
      LOCAL_STORAGE_TODO_KEY,
      JSON.stringify(this.todos)
    );
  }

  replace(todo: Todo) {
    const todoIndex = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[todoIndex] = todo;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.localStorageService.set(
      LOCAL_STORAGE_TODO_KEY,
      JSON.stringify(this.todos)
    );
  }
}
