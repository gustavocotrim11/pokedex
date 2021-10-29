const baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18";

export async function getAllPokemon() {
  const response = await fetch(baseUrl);
  const data = await response.json();

  return data;
}

export async function getPokemon(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getAnotherPokemonPage(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
