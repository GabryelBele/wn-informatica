import React from 'react';
import '../styles/Processos.css';

const Processos: React.FC = () => {
  return (
    <header className="processos">
      <div className="processos-text">
       <h3>Nossos Processos</h3>
       <p>Uma metodologia comprovada para entregar aplicativos exclusivos.</p>
      </div>
      <div className="processos-cards">
        <div className="card-processos">
            <div className="flex-row-card-processos">
                 <img src="/public/check.png" alt="Ícone de Descobertas" />
                 <h1>Descobertas</h1>
            </div>
            <p>Entendemos suas necessidades e objetivos de negócio</p>
        </div>
        <div className="card-processos">
            <div className="flex-row-card-processos">
                 <img src="/public/check.png" alt="Ícone de Planejamento" />
                 <h1>Planejamento</h1>
            </div>
            <p>Definimos a arquitetura e roadmap do projeto</p>
        </div>
        <div className="card-processos">
            <div className="flex-row-card-processos">
                 <img src="/public/check.png" alt="Ícone de Projeto" />
                 <h1>Projeto</h1>
            </div>
            <p>Criamos interfaces intuitivas e compreensíveis</p>
        </div>
        <div className="card-processos">
            <div className="flex-row-card-processos">
                <img src="/public/check.png" alt="Ícone de Desenvolvimento" />
                <h1>Desenvolvimento</h1>
            </div>
            <p>Construímos seu app com as melhores práticas.</p>
        </div>
        <div className="card-processos">
            <div className="flex-row-card-processos">
                <img src="/public/check.png" alt="Ícone de Testes" />
                <h1>Testes</h1>
            </div>
            <p>Garantimos qualidade e desempenho</p>
        </div>
        <div className="card-processos">
            <div className="flex-row-card-processos">
                <img src="/public/check.png" alt="Ícone de Lançamento" />
                <h1>Lançamento</h1>
            </div>
            <p>Publicamos seu aplicativo nas lojas e damos suporte contínuo.</p>
        </div>
      </div>
    </header>
  );
};

export default Processos;
