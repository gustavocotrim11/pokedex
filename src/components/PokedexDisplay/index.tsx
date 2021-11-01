import { useEffect, useState } from 'react';

import { Card } from '../Card';
import { Loader } from '../Loader';
import { ErrorPage } from '../ErrorPage';
import { getAllPokemon, getPokemon, getAnotherPokemonPage } from '../../services/api';
import { PokemonData } from '../../interfaces';

import './styles.css';

import logoPokedex from '../../assets/logo-pokedex.png';

interface Pokemon {
  name: string,
  url: string
}

export function PokedexDisplay() {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPokemon();
      if (data) {
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        await loadingPokemon(data.results);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    }

    fetchData();
  }, []);

  const nextPage = async () => {
    if (!nextUrl) return;
    setLoading(true);
    const data = await getAnotherPokemonPage(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    window.scrollTo(0, 0);
  }

  const prevPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    const data = await getAnotherPokemonPage(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    window.scrollTo(0, 0);
  }

  const loadingPokemon = async (data: []) => {
    const pokemonData = await Promise.all(data.map(async (pokemon: Pokemon) => {
      const pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(pokemonData);
  }

  const render = () => {
    if (loading) {
      return <Loader />
    } else if (error) {
      return <ErrorPage />
    } else {
      return (
        <>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon}/>
          })}
        </>
      )
    }
  }

  return (
    <main className="container-display">
      <header className="title-display">
        <img src={logoPokedex} alt="" className=""/>
        <h1>Pokédex</h1>
      </header>
      <section className="container-grid">
        {render()}
      </section>
      <div>
        <button type="button" className="btn" onClick={prevPage}>Back</button>
        <button type="button" className="btn" onClick={nextPage}>Next</button>
      </div>
    </main>
  )
}