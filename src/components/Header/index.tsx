import './styles.css'

import logoPokemon from '../../assets/logo-pokemon.svg';

export function Header() {
  return (
    <header className="container-header">
      <div className="content-header">
        <img src={logoPokemon} alt="Pokémon Logo" className="logo-header"/>
      </div>
    </header>
  )
}