export interface Pokedex {
  name: string;
  url: string;
}

export interface PokedexResponseAPI {
  count: number;
  next: string;
  previous: string | null;
  results: Pokedex[];
}
