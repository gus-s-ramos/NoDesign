import { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importe o Navigate
import axios from 'axios';

import './login.css';

function Login() {
  const [redirectToHome, setRedirectToHome] = useState(false); // Estado para redirecionamento
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      // Redirecione para a página /home após o login ser bem-sucedido
      setRedirectToHome(true);
    } catch (error) {
      console.error('Erro de login:', error.response.data);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/usuarios', { name, email, password, phone });
      console.log(response.data);
      // Redirecione para a página /home após a criação da conta ser bem-sucedida
      setRedirectToHome(true);
    } catch (error) {
      console.error('Erro ao criar conta:', error.response.data);
    }
  };

  return (
    <div className="login-container">
      {redirectToHome && <Navigate to="/home" />} {/* Redirecionamento condicional */}
      <div className='MenuLogin'>
      <p>Faça seu login</p>
        <div className="tabs">
          <button onClick={() => setTab('login')} className={tab === 'login' ? 'active' : ''}>Acesse sua conta</button>
          <button onClick={() => setTab('createAccount')} className={tab === 'createAccount' ? 'active' : ''}>Crie sua conta</button>
        </div>
        <div>
          {tab === 'login' ? (
            <form className="loginForm" onSubmit={handleLogin}>
              <div>
                <p>E-mail</p>
                <input type="email" id='email' placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p>Senha</p>
                <input type="password" id='password' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <button type="submit">Entrar</button>
              </div>

            </form>
          ) : (
            <form className="loginForm" onSubmit={handleCreateAccount}>
              <div>
                <p>Nome</p>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <p>E-mail</p>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p>Telefone</p>
                <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <button type="submit">Criar Conta</button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
};

export default Login;
