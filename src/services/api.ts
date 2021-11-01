const baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=18";

export async function getAllPokemon() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getPokemon(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getAnotherPokemonPage(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
