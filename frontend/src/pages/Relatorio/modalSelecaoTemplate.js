import React from 'react';
import './modalSelecaoTemplate.css';
import { models } from './models';

function ModalSelecaoTemplate({ isOpen, onClose, onSelectModel, allScreens }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Escolha um Modelo de Tela</h1>
        <div className="model-list">
          {models.map((model) => (
            <div
              key={model.id}
              className="model-item"
              onClick={() => onSelectModel(model.id)}
            >
              <h3>{model.name}</h3>
              <p>{model.description}</p>
            </div>
          ))}
        </div>
        <button className="btn-close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ModalSelecaoTemplate;
