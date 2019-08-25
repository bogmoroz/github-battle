import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { Link } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <Link to='/' className='nav-link'>
                Popular
              </Link>
            </li>
            <li>
              <Link to='/battle' className='nav-link'>
                Battle
              </Link>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FaLightbulb size={20} />
            ) : (
              <FaLightbulb size={20} color={'#e6e6e6'} />
            )}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
