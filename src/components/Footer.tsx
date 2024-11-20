import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="container">
      <div className="mainTop">
        <div className="leftText">
          <h2>AppCraft</h2>
          <p>Transformando ideias em aplicativos incríveis desde 2015.</p>
        </div>
        <div className="mainText">
          <h2>Contato</h2>
          <p>contato@appcraft.com.br</p>
          <p>+55 (11) 9999-9999</p>
          <p>São Paulo, SP</p>
        </div>
        <div className="rightText">
          <h2>Siga-nos</h2>
          <div className="links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="mainBottom">
        <h3>© 2024 AppCraft. Todos os direitos reservados.</h3>
      </div>
    </div>
  );
};

export default Footer;
