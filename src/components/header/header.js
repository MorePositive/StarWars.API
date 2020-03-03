import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a className="logo" href="#">Star<span className="logo-sub">DB</span></a>
      </div>
      <nav>
        <ul>
        <li>People</li>
        <li>Planets</li>
        <li>Starships</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;