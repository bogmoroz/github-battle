import React from 'react';
import { ThemeConsumer } from '../contexts/theme';

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'turn off the light' : 'turn on the light'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
