import { useState, useRef } from 'react';
import axios from 'axios';
import ModalProfile from '../components/ModalProfile';
import '../pages/Assinatura/assinaturaModal.css';
import './login.css';

function CreateAccount({ onSave }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleCreateAccount = async () => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.error('Erro ao salvar assinatura:', error);
      setError('Erro ao criar conta. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className='MenuLogin'>
        <h2>Crie sua conta</h2>
        {error && <p className="error">{error}</p>}
        <form className="loginForm">
          <div className="profile-image-container">
            {/* Componente para imagem de perfil */}
          </div>
          <div>
            <label htmlFor='name'>Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'>E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='phone'>Telefone</label>
            <input
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button onClick={handleCreateAccount} disabled={loading}>
              {loading ? 'Criando...' : 'Criar Conta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
