export interface PokemonData {
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  height: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  weight: number;
}
