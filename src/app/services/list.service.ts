import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

const LOCAL_STORAGE_TODO_KEY = '@todos';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private localStorageService: LocalStorageService) {}

  todos: Array<string> = JSON.parse(
    this.localStorageService.get(LOCAL_STORAGE_TODO_KEY) ?? '[]'
  );

  removeTodo(todoToRemove: string) {
    this.todos = this.todos.filter((todo) => todo !== todoToRemove);
    this.localStorageService.set(
      LOCAL_STORAGE_TODO_KEY,
      JSON.stringify(this.todos)
    );
  }

  addTodo(todo: string) {
    this.todos.push(todo);
    this.localStorageService.set(
      LOCAL_STORAGE_TODO_KEY,
      JSON.stringify(this.todos)
    );
  }
}
