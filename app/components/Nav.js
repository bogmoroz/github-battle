import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { NavLink } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                activeStyle={activeStyle}
                className='nav-link'
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                activeStyle={activeStyle}
                className='nav-link'
              >
                Battle
              </NavLink>
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
