import React, { useRef, useState } from 'react';
import './Modal.css'; // Arquivo CSS para estilização do modal
import ModalTimelineLogoSelector from './ModalTimelineLogo'; // Importa o componente ModalImageSelector

const Timelineloader = ({ label, asset, setAsset }) => {
  const inputFileRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile)); // Armazena temporariamente a imagem selecionada
    setModalOpen(true); // Abre o modal ao selecionar a imagem
  };

  const handleResetImage = () => {
    setSelectedImage(null);
    if (inputFileRef.current) {
      inputFileRef.current.value = ''; // Reseta o input de arquivo
    }
  };

  // Função chamada ao salvar a imagem recortada
  const handleSaveImage = (imageSrc) => {
    setAsset(imageSrc); // Salva a imagem no estado principal (asset)
    setModalOpen(false); // Fecha o modal após salvar
    handleResetImage(); // Limpa a imagem selecionada e reseta o input de arquivo
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Fecha o modal
    handleResetImage(); // Reseta a imagem e o input de arquivo
  };

  return (
    <div className="loginUploaderContainer">

      <div>
        <h3>{label}</h3>
        <img src={asset} alt={label} onClick={() => inputFileRef.current.click()} className="assetPreview" />
        <button className='buttonScreenInfo' onClick={() => inputFileRef.current.click()}>Buscar</button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <ModalTimelineLogoSelector
          onResetImage={handleResetImage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveImage}
          imageSrc={selectedImage}
        /></div>
    </div>
  );
};


export default Timelineloader;
