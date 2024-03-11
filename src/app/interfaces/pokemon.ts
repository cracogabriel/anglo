export interface Pokemon {
  id: number;
  name: string;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  sprites: PokemonSprite;
}

export interface PokemonColor {
  id: number;
  name: string;
}

export interface PokemonSprite {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}
