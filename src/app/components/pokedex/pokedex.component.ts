import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pokedex, PokedexResponseAPI } from '../../interfaces/pokedex';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [NgFor, NgIf, HttpClientModule, RouterLink],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent {
  constructor(private http: HttpClient) {}
  pokemons: Array<Pokedex> = [];
  isLoading = this.pokemons.length === 0;

  getPokemons() {
    this.http
      .get<PokedexResponseAPI>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((response) => {
        this.pokemons = response.results;
      });
  }

  ngOnInit() {
    this.getPokemons();
  }
}
