import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


import './login.css';

function Login() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [tab, setTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null); // Estado para a imagem de perfil
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
      setRedirectToHome(true);
    } catch (error) {
      console.error('Erro ao criar conta:', error.response.data);
      setError('Erro ao criar conta. Verifique suas informações.');
      setLoading(false);
    }if (password !== passwordConfirmation) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }
    
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="login-container">
      {redirectToHome && <Navigate to="/home" />}
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
              <div className="profile-image-container">
                <label htmlFor="profileImage" className="image-label">
                  <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                  <div className="image-preview" style={{ backgroundImage: `url(${profileImage || 'https://via.placeholder.com/150'})` }}></div>
                </label>
              </div>
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
                <label htmlFor='senha'>Senha</label>
                <input type="senha" id='senha' placeholder="Senha" value={password} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='senha'>Confirmação de senha</label>
                <input type="senha" id='senha' placeholder="Senha" value={password} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              <div>
                <button type="submit" disabled={loading}>{loading ? 'Criando...' : 'Cancelar'}</button>
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
