import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.shadow};
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PokemonName = styled.h3`
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-size: 1rem;
`;