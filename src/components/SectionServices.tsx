import React from 'react';
import '../styles/SectionServices.css';

const SectionServices: React.FC = () => {
  return (
    <header id="services" className="Section-Services">
      <div className="Services-text">
        <h3>Nossos Serviços</h3>
        <p>Oferecemos soluções completas em desenvolvimento mobile para transformar sua visão em realidade.</p>
      </div>
      <div className="Services-Cards">
        <div className='card-services'>
          <img src="/smart.png" alt="" />
          <h1>Desenvolvimento IOS</h1>
          <p>Apps Nativos para Iphone e Ipad com Design Elegante e Desempenho Excepcional.</p>
        </div>
        <div className='card-services'>
          <img src="/program.png" alt="" />
          <h1>Desenvolvimento Android</h1>
          <p>Apps Androids personalizados com foco na experiência do usuário e escalabilidade.</p>
        </div>
        <div className='card-services'>
          <img src="/rocket.png" alt="" />
          <h1>Aplicativos MultiPlataforma</h1>
          <p>Soluções Híbridas eficientes usando React Native e Flutter.</p>
        </div>
        <div className='card-services'>
          <img src="/ui-ux.png" alt="" />
          <h1>Consultoria UX/UI</h1>
          <p>Design Centrado no usuário para criar experiências memoráveis.</p>
        </div>
      </div>
    </header>
  );
}

export default SectionServices;
