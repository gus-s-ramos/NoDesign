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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      setLoading(false);
      // Redirecione para a página /home após o login ser bem-sucedido
      setRedirectToHome(true);
    } catch (error) {
      console.error('Erro de login:', error.response.data);
      setError('Erro ao fazer login. Verifique suas credenciais.');
      setLoading(false);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/usuarios', { name, email, password, phone });
      console.log(response.data);
      setLoading(false);
      // Redirecione para a página /home após a criação da conta ser bem-sucedida
      setRedirectToHome(true);
    } catch (error) {
      console.error('Erro ao criar conta:', error.response.data);
      setError('Erro ao criar conta. Verifique suas informações.');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {redirectToHome && <Navigate to="/home" />} {/* Redirecionamento condicional */}
      <div className='MenuLogin'>
        <h2>Bem-vindo</h2>
        <div className="tabs">
          <button onClick={() => setTab('login')} className={tab === 'login' ? 'active' : ''}>Acesse sua conta</button>
          <button onClick={() => setTab('createAccount')} className={tab === 'createAccount' ? 'active' : ''}>Crie sua conta</button>
        </div>
        {error && <p className="error">{error}</p>}
        <div>
          {tab === 'login' ? (
            <form className="loginForm" onSubmit={handleLogin}>
              <div>
                <label htmlFor='email'>E-mail</label>
                <input type="email" id='email' placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='password'>Senha</label>
                <input type="password" id='password' placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div>
                <button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
              </div>
            </form>
          ) : (
            <form className="loginForm" onSubmit={handleCreateAccount}>
              <div>
                <label htmlFor='name'>Nome</label>
                <input type="text" id='name' placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='email'>E-mail</label>
                <input type="email" id='email' placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='phone'>Telefone</label>
                <input type="tel" id='phone' placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='password'>Senha</label>
                <input type="password" id='password' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div>
                <button type="submit" disabled={loading}>{loading ? 'Criando...' : 'Criar Conta'}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
