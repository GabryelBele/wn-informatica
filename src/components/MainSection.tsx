import React from 'react';
import '../styles/MainSection.css';

const MainSection: React.FC = () => {
  return (
    <header className="main-section">
      <div className="main-left">
        <h4>Transformando ideias em Apps Incríveis</h4>
        <p>
          Desenvolvemos aplicativos móveis inovadores que impulsionam seu negócio para o futuro.
          Nossa expertise em desenvolvimento mobile cria experiências exclusivas para seus usuários.
        </p>
        <div className="button-group">
          <button className="main-button">Iniciar Projeto</button>
          <button className="main-button">Ver Portfólio</button>
        </div>
      </div>
      <div className="main-right">
        <img src="/imei.png" alt="Exemplo de aplicativo" />
      </div>
    </header>
  );
};

export default MainSection;
