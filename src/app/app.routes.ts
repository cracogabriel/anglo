import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:name', component: PokemonComponent },
];
