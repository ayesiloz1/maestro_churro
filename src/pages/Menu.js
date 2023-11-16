// src/pages/Menu.js
import React from 'react';
import ChurrosComponent from '../ChurrosComponent';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Delicious Menu</h1>
      {/* ... other menu items or sections */}
      <ChurrosComponent />
      {/* ... potentially more menu items or sections */}
    </div>
  );
};

export default Menu;
