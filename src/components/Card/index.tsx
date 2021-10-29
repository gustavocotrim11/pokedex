import { useState } from 'react';
import Modal from 'react-modal';

import { typeColors } from '../../helpers';
import { PokemonData } from '../../interfaces';

import './styles.css';

Modal.setAppElement('#root');

interface CardProps {
  pokemon: PokemonData
}

export function Card({ pokemon }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  function handleOpenModal() {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <>
    <button className="container-card" onClick={handleOpenModal}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <h2 className="pokemon-name">{pokemon.name}</h2>
    </button>

    <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      <header className="modal-container-header">
        <div className="modal-header">
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <h2 className="pokemon-name">{pokemon.name}</h2>
        </div>
        <button className="btn-exit" onClick={handleCloseModal}>X</button>
      </header>
      <section className="modal-container-section">
        <div className="modal-first-subsection">
          <div>
          <h3 className="section-titles">Types</h3>
          <div className="container-types">
            {pokemon.types.map((type, i) => {
              return (
                <div className="types" key={i} style={{ backgroundColor: typeColors[type.type.name] }}>
                  {type.type.name}
                </div>
              )
            })}
          </div>
          </div>
          <div>
            <h3 className="section-titles">Height</h3>
            <p>{pokemon.height}</p>
            <h3 className="section-titles">Weight</h3>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <h3 className="section-titles">Ability</h3>
            {pokemon.abilities.map((ability, i) => {
              return (
                <p key={i}>{ability.ability.name}</p>
              )
            })}
          </div>
        </div>
        <div>
          <h3 className="section-titles">Stats</h3>
          {pokemon.stats.map((stat, i) => {
            return (
              <div key={i}>
                <p>{stat.stat.name}: {stat.base_stat}</p>
              </div>
            )
          })}
        </div>
      </section>
    </Modal>
    </>
  )
}