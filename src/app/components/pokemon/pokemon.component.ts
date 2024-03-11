import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  pokemon: Pokemon | null = null;

  getPokemon() {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .subscribe((response) => {
        this.pokemon = response;
      });
  }

  ngOnInit() {
    this.getPokemon();
  }
}
