import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="selected">Home</NavLink></li>
        <li><NavLink to="/projects" activeClassName="selected">Projects</NavLink></li>
        <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;