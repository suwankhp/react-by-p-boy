import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      I am a {theme} themed button
    </button>
  );
};

export default ThemedButton;
