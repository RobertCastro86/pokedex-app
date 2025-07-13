import React from 'react';
import { CardContainer, PokemonImage, PokemonName } from './PokemonCard.styles';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(pokemon)}>
      <PokemonImage src={pokemon.image} alt={pokemon.name} />
      <PokemonName>{pokemon.name}</PokemonName>
    </CardContainer>
  );
};

export default PokemonCard;