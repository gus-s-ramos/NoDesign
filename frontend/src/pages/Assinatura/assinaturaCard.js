// src/components/AssinaturaCard.js
import React from 'react';
import './assinaturaCard.css';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';

const AssinaturaCard = ({ assinatura, onClick, onEdit, onDelete }) => {
  return (
    <div className="assinatura-card" onClick={onClick}>
      <div className="assinatura-card-image">
        <img
          src={`http://localhost:3001/${assinatura.imagem}`}
          alt={`${assinatura.nome} ${assinatura.sobrenome}`}
        />
      </div>
      <div className="divisoriaassinatura"></div>
      <div className="assinatura-card-content">
        <h3>{`${assinatura.nome} ${assinatura.sobrenome}`}</h3>
        <h4>{`${assinatura.cargo} | Yazo`}</h4>
        <p>
          <a href={`mailto:${assinatura.email}`}>{assinatura.email}</a>
        </p>
        <p>
          <a href={`tel:${assinatura.telefone}`}>{assinatura.telefone}</a>
        </p>
        <p>
          <a href="https://yazo.com.br" target="_blank" rel="noopener noreferrer">
            yazo.com.br
          </a>
        </p>
      </div>
      <div className="card-hover-buttons">
        <button onClick={(e) => {e.stopPropagation(); onEdit(assinatura); }}>Editar</button>
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Icon path={mdiDelete} size={1} style={{ color: '#ff0000' }} />
        </button>
      </div>
    </div>
  );
};

export default AssinaturaCard;
