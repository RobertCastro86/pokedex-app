const BASE_URL = 'https://pokeapi.co/api/v2';

export const api = {
  async getPokemons(limit = 10, offset = 0) {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return response.json();
  },

  async getPokemonDetails(url) {
    const response = await fetch(url);
    return response.json();
  },

  async getAbilityDetails(url) {
    const response = await fetch(url);
    return response.json();
  },
};