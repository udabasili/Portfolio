import React from 'react';
import './header.styles.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  
  <div>
    <nav className="navigation-container">
      <ul className="navigation-list">
        <NavLink className="navigation-item" to="/">
          <li>home</li>
        </NavLink>
        <NavLink className="navigation-item" to="/projects">
          <li>projects</li>
        </NavLink>
        <NavLink className="navigation-item" to="/contact">
          <li>contact</li>
        </NavLink>
      </ul>
    </nav>
  </div>
);

export default Header;
