// src/components/AssinaturaModal.js
import React from 'react';
import './assinaturaGrid.css';

const AssinaturaModal = ({ assinatura, onClose }) => {
  return (
    <div className="assinatura-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={`http://localhost:3001/uploads/${assinatura.imagem}`} alt={assinatura.nome} />
        <h2>{assinatura.nome}</h2>
        <p>Data de Upload: {assinatura.dataUpload}</p>
        <p>Formato: {assinatura.formato}</p>
        <p>Dimensões: {assinatura.dimensoes}</p>
        {/* Adicione mais detalhes conforme necessário */}
      </div>
    </div>
  );
};

export default AssinaturaModal;
