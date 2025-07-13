import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail/PokemonDetail';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pokemon } = location.state || {};

  if (!pokemon) {
    navigate('/');
    return null;
  }

  const handleBack = () => {
    navigate('/');
  };

  return <PokemonDetail pokemon={pokemon} onBack={handleBack} />;
};

export default Detail;