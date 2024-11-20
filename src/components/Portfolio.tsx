import React from 'react';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <header id="portfolio" className="portfolio">
      <div className="portfolio-text">
       <h3>Nosso Portfólio</h3>
       <p>Conheça alguns dos nossos projetos mais recentes e impactantes.</p>
      </div>
      <div className="portfolio-Cards">
        <div className='card-portfolio'>
            <img src="/iphone.jpg" alt="" />
            <h1>HealthTrack Pro</h1>
            <p>App de monitoramento de saúde e fitness com mais de 100mil downloads</p>
        </div>
        <div className='card-portfolio'>
            <img src="/dados.jpg" alt="" />
            <h1>EntregaExpressa</h1>
            <p>Plataforma de entrega com integração em tempo real.</p>
        </div>
        <div className='card-portfolio'>
            <img src="/amigos.jpg" alt="" />
            <h1>EduLearn</h1>
            <p>Aplicativo educacional com recursos de gamificação.</p>
        </div>
      </div>
    </header>
  );
}

export default Portfolio;
