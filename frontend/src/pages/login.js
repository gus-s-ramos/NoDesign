import { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import ModalProfile from '../components/ModalProfile';
import '../pages/Assinatura/assinaturaModal.css';
import './login.css';

function Login(onSave) {
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
  const [splash, setSplash] = useState('https://via.placeholder.com/150');
  const inputFileRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleSaveImage = (imageSrc) => {
    setSplash(imageSrc);
    setModalOpen(false);
    setSelectedImage(null);
  };

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
      console.error('Erro de login:', error.response?.data || error.message);
      setError('Erro ao fazer login. Verifique suas credenciais.');
      setLoading(false);
    }
  };

  const handleCreateAccount = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);


    try {
      const res = await axios.post('http://localhost:3001/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Assinatura salva com sucesso:', res.data);
      onSave(res.data); // Callback após salvar a assinatura
    } catch (error) {
      console.error('Erro ao salvar assinatura:', error);
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
            <form className="loginForm" >
              <div className="profile-image-container">
                
              </div>
              <div>
                <label htmlFor='name'>Nome</label>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='email'>E-mail</label>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='phone'>Telefone</label>
                <input type="tel" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label htmlFor='password'>Senha</label>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div>
                <button onClick={handleCreateAccount}>{loading ? 'Criando...' : 'Criar Conta'}</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
