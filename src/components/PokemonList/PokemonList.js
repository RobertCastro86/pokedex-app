import PokemonCard from '../PokemonCard/PokemonCard';
import {
  ListContainer,
  PokemonGrid,
  LoadMoreContainer,
  LoadMoreButton,
} from './PokemonList.style.js';

const PokemonList = ({ pokemons, onPokemonClick, onLoadMore, loading }) => {
  return (
    <ListContainer>
      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={onPokemonClick}
          />
        ))}
      </PokemonGrid>

      <LoadMoreContainer>
        <LoadMoreButton onClick={onLoadMore} disabled={loading}>
          {loading ? 'Carregando...' : 'Carregar mais'}
        </LoadMoreButton>
      </LoadMoreContainer>
    </ListContainer>
  );
};

export default PokemonList;