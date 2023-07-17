export type DataProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type PokemonProps = {
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: null | string;
    back_shiny: null | string;
    back_shiny_female: null | string;
    front_default: string;
    front_female: null | string;
    front_shiny: null | string;
    front_shiny_female: null | string;
    other: {
      dream_world: {
        front_default: string;
        front_female: null | string;
      };
      home: {
        front_default: string;
        front_female: null | string;
        front_shiny: string;
        front_shiny_female: null | string;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: null | string;
          back_shiny: string;
          back_shiny_female: null | string;
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: null | string;
          back_shiny: string;
          back_shiny_female: null | string;
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
        platinum: {
          back_default: string;
          back_female: null | string;
          back_shiny: string;
          back_shiny_female: null | string;
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: null | string;
            back_shiny: string;
            back_shiny_female: null | string;
            front_default: string;
            front_female: null | string;
            front_shiny: string;
            front_shiny_female: null | string;
          };
          back_default: string;
          back_female: null | string;
          back_shiny: string;
          back_shiny_female: null | string;
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
        "x-y": {
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: null | string;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: null | string;
          front_shiny: string;
          front_shiny_female: null | string;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: null | string;
        };
      };
    };
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
  weight: number;
};
