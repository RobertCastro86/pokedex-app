import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonList from '../components/PokemonList/PokemonList';
import { api } from '../services/api';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const fetchPokemons = async (offsetValue = 0, append = false) => {
    setLoading(true);
    try {
      const data = await api.getPokemons(10, offsetValue);

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detail = await api.getPokemonDetails(pokemon.url);
          return {
            id: detail.id,
            name: pokemon.name,
            url: pokemon.url,
            image:
              detail.sprites.other['official-artwork'].front_default ||
              detail.sprites.front_default,
          };
        })
      );

      if (append) {
        setPokemons((prev) => [...prev, ...pokemonDetails]);
      } else {
        setPokemons(pokemonDetails);
      }

      setOffset(offsetValue + 10);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons(0, false);
  }, []);

  const handleLoadMore = () => {
    fetchPokemons(offset, true);
  };

  const handlePokemonClick = (pokemon) => {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  return (
    <PokemonList
      pokemons={pokemons}
      onPokemonClick={handlePokemonClick}
      onLoadMore={handleLoadMore}
      loading={loading}
    />
  );
};

export default Home;