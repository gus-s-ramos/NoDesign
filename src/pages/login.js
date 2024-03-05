import { useState } from 'react';

import './login.css';

function Login() {
  const [tab, setTab] = useState('login');

  return (
    <div className="login-container">
      <div className="left" style={{ backgroundColor: '#28FF00', width: '50%', height: '100vh', float: 'left' }}>
        {/* Conteúdo da metade direita da tela */}
      </div>
      <div className="right" style={{ backgroundColor: '#292929', width: '50%', height: '100vh', float: 'left' }}>
        {/* Conteúdo da metade esquerda da tela */}
        <div className='MenuLogin'>
          <div className="tabs">
            <button onClick={() => setTab('login')} className={tab === 'login' ? 'active' : ''}>Acesse sua conta</button>
            <button onClick={() => setTab('createAccount')} className={tab === 'createAccount' ? 'active' : ''}>Crie sua conta</button>
          </div>
          <div>
            {tab === 'login' ? (
              <form className="content">
                <div>
                  <p>E-mail</p>
                  <input type="email" placeholder="E-mail" />
                </div>
                <div>
                  <p>Senha</p>
                  <input type="password" placeholder="Senha" />
                </div>
                <div>
                  <button type="submit">Entrar</button>
                </div>

              </form>
            ) : (
              <form className="content">
                <div>
                  <p>Nome</p>
                  <input type="text" placeholder="Nome" />
                </div>
                <div>
                  <p>E-mail</p>
                  <input type="email" placeholder="E-mail" />
                </div>
                <div>
                  <p>Telefone</p>
                  <input type="tel" placeholder="Telefone" />
                </div>
                <div>
                  <button type="submit">Criar Conta</button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Login;
