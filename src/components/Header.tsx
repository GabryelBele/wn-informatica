import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="text-container">
          <img src="/public/smart.png" alt="Logo" className="logo" />
          <span className="logo-title">AplicativoCraft</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <button className="navbar-item">Serviços</button>
        <button className="navbar-item">Portfólio</button>
        <button className="navbar-item">Processos</button>
        <button className="navbar-item contato">Contato</button>
      </nav>
    </header>
  );
};

export default Header;
