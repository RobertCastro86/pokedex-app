import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import {
  DetailContainer,
  BackButton,
  DetailCard,
  DetailContent,
  ImageContainer,
  PokemonImage,
  InfoContainer,
  PokemonName,
  Section,
  SectionTitle,
  TypesContainer,
  TypeBadge,
  AbilitiesContainer,
  AbilityCard,
  AbilityName,
  AbilityDescription,
  MovesContainer,
  MoveItem,
  LoadingContainer,
  LoadingText,
} from './PokemonDetail.style.js';

const PokemonDetail = ({ pokemon, onBack }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const data = await api.getPokemonDetails(pokemon.url);

        const abilitiesWithDescriptions = await Promise.all(
          data.abilities.map(async (ability) => {
            try {
              const abilityData = await api.getAbilityDetails(ability.ability.url);
              const description = abilityData.effect_entries.find(
                (entry) => entry.language.name === 'pt-BR'
              )?.effect || 'No description available';

              return {
                name: ability.ability.name,
                description: description,
              };
            } catch (error) {
              return {
                name: ability.ability.name,
                description: 'Description not available',
              };
            }
          })
        );

        setPokemonDetails({
          ...data,
          abilitiesWithDescriptions,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingText>Carregando detalhes...</LoadingText>
      </LoadingContainer>
    );
  }

  if (!pokemonDetails) {
    return (
      <LoadingContainer>
        <LoadingText>Erro ao carregar detalhes do Pokémon</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={onBack}>← Voltar</BackButton>

      <DetailCard>
        <DetailContent>
          <ImageContainer>
            <PokemonImage
              src={
                pokemonDetails.sprites.other['official-artwork'].front_default ||
                pokemonDetails.sprites.front_default
              }
              alt={pokemonDetails.name}
            />
          </ImageContainer>

          <InfoContainer>
            <PokemonName>{pokemonDetails.name}</PokemonName>

            <Section>
              <SectionTitle>Tipos</SectionTitle>
              <TypesContainer>
                {pokemonDetails.types.map((type, index) => (
                  <TypeBadge key={index}>{type.type.name}</TypeBadge>
                ))}
              </TypesContainer>
            </Section>

            <Section>
              <SectionTitle>Habilidades</SectionTitle>
              <AbilitiesContainer>
                {pokemonDetails.abilitiesWithDescriptions.map((ability, index) => (
                  <AbilityCard key={index}>
                    <AbilityName>{ability.name}</AbilityName>
                    <AbilityDescription>{ability.description}</AbilityDescription>
                  </AbilityCard>
                ))}
              </AbilitiesContainer>
            </Section>

            <Section>
              <SectionTitle>Movimentos</SectionTitle>
              <MovesContainer>
                {pokemonDetails.moves.slice(0, 12).map((move, index) => (
                  <MoveItem key={index}>{move.move.name}</MoveItem>
                ))}
              </MovesContainer>
              {pokemonDetails.moves.length > 12 && (
                <p style={{ marginTop: '8px', fontSize: '0.875rem', opacity: 0.7 }}>
                  E mais {pokemonDetails.moves.length - 12} movimentos...
                </p>
              )}
            </Section>
          </InfoContainer>
        </DetailContent>
      </DetailCard>
    </DetailContainer>
  );
};

export default PokemonDetail;