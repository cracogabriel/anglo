export function getPokemonTypeColor(type: string): string {
  switch (type.toUpperCase()) {
    case 'NORMAL':
      return '#A8A878';
    case 'FIRE':
      return '#F08030';
    case 'WATER':
      return '#6890F0';
    case 'ELECTRIC':
      return '#F8D030';
    case 'GRASS':
      return '#78C850';
    case 'ICE':
      return '#98D8D8';
    case 'FIGHTING':
      return '#C03028';
    case 'POISON':
      return '#A040A0';
    case 'GROUND':
      return '#E0C068';
    case 'FLYING':
      return '#A890F0';
    case 'PSYCHIC':
      return '#F85888';
    case 'BUG':
      return '#A8B820';
    case 'ROCK':
      return '#B8A038';
    case 'GHOST':
      return '#705898';
    case 'DRAGON':
      return '#7038F8';
    case 'DARK':
      return '#705848';
    case 'STEEL':
      return '#B8B8D0';
    case 'FAIRY':
      return '#EE99AC';
    default:
      return '#68A090';
  }
}
