import React, { useRef, useState } from 'react';
import ModalLoginImageSelector from './ModalLogin';
import './Modal.css';

const LoginUploader = ({ label, asset, setAsset }) => {
  const inputFileRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile)); // Armazena temporariamente a imagem selecionada
    setModalOpen(true); // Abre o modal ao selecionar a imagem
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null); // Limpa a imagem selecionada ao fechar o modal sem salvar
  };

  const handleSaveImage = (imageSrc) => {
    setAsset(imageSrc); // Salva a imagem no estado principal (asset) após confirmar no modal
    setModalOpen(false); // Fecha o modal após salvar
    setSelectedImage(null); // Limpa a imagem selecionada
  };

  return (
    <div className="loginUploaderContainer">
      <div>
      <h3>{label}</h3>
      <img src={asset} alt={label} onClick={() => inputFileRef.current.click()} className="assetPreview" />
      <button onClick={() => inputFileRef.current.click()}>Buscar</button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <ModalLoginImageSelector isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveImage} imageSrc={selectedImage} />
    </div>
    </div>
  );
};

export default LoginUploader;
