import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { HeaderContainer, HeaderContent, Title, ThemeButton } from './Header.styles';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Pokédex</Title>
        <ThemeButton onClick={toggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </ThemeButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;