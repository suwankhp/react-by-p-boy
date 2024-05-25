import { useState } from 'react';
import ThemeContext from '../ThemeContext';
import ThemedButton from '../ThemedButton';

const Context01 = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemedButton />
    </ThemeContext.Provider>
  );
};
export default Context01;
