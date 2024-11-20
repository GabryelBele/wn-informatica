import React from 'react';
import '../styles/Formulario.css';

const Formulario: React.FC = () => {
  return (
    <form id='contato' className="formulario">
        <h2>Vamos Criar Algo Incrível Juntos</h2>
        <p>Estamos prontos para transformar sua ideia em realidade.</p>
        <div className='form-group'>
            <div className='nome'>
              <p>Nome</p>
              <input type="text" placeholder='Seu Nome' />
            </div>
            <div className='email'>
              <p>Email</p>
              <input type="email" placeholder='Seu Email' />
            </div>
            <div className='mensagem'>
              <p>mensagem</p>
              <textarea placeholder='Conte-nos sobre o seu projeto' />
            </div>
            <button className='btn-form'>Enviar Mensagem</button>
        </div>
    </form>
  );
}

export default Formulario;
