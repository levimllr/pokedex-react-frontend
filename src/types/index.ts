// COMMON INTERFACES

export interface MetaPokemon {
    id: string;
    type: string;
    attributes: PokemonAttributes;
};

export interface Sprites {
    back_shiny: string;
    back_female: string;
    front_shiny: string;
    back_default: string;
    front_female: string;
    front_default: string;
    back_shiny_female: string;
    front_shiny_female: string;
};

export interface BasicAPILink {
    url: string;
    name: string
};

// POKEMON API AT INDEX PATH
// /api/v1/pokemon

export interface AllPokemonAPI {
    data: Array<MetaPokemon>
};

export interface PokemonAttributes {
    pokemon_id: number;
    name: string,
    types: Array<Type>;
    sprites: Sprites
};

export interface SimplePokemonTypes {
    slot: number;
    type: BasicAPILink;
};

// POKEMON API AT SHOW PATH
// /api/v1/pokemon/:id

export interface OnePokemonAPI {
    data: FullPokemonAttributes;
};

export interface FullPokemonAttributes {
    abilities: Array<AbilityMeta>;
    base_experience: number;
    forms: Array<BasicAPILink>;
    game_indices: Array<GameIndex>;
    height: number;
    held_items: Array<HeldItem>;
    pokemon_id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<Move>;
    name: string;
    order: number;
    species: BasicAPILink;
    sprites: Sprites;
    stats: Array<Stat>;
    types: Array<Type>;
    weight: number;
};

export interface AbilityMeta {
    slot: number;
    ability: BasicAPILink;
    is_hidden: boolean;
};

export interface GameIndex {
    version: BasicAPILink;
    game_index: number;
};

export interface HeldItem {
    item: BasicAPILink;
    version_details: VersionDetail;
};

export interface VersionDetail {
    rarity: number;
    version: BasicAPILink;
};

export interface Move {
    move: BasicAPILink;
    version_group_details: Array<VersionGroupDetail>;
};

export interface VersionGroupDetail {
    version_group: BasicAPILink;
    level_learned_at: number;
    move_learn_method: BasicAPILink;
};

export interface Stat {
    stat: BasicAPILink;
    effort: number;
    base_stat: number;
};

export interface Type {
    slot: number;
    type: BasicAPILink;
};
