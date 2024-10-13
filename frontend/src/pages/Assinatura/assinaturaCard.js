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
      <div style={{ width: '2px', backgroundColor: '#ffa00c', marginLeft: '16px', marginRight: '16px' }}></div>
      <div style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }}>
        <h3 style={{ color: '#ffa00c' }}>{`${assinatura.nome} ${assinatura.sobrenome}`}</h3>
        <h3>{`${assinatura.cargo} | Yazo`}</h3>
        <p>
          <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }}>
            {assinatura.email}
          </a>
        </p>
        <p>
          <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }}>
            {assinatura.telefone}
          </a>
        </p>
        <p>
          <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }} href="https://www.yazo.com.br">
            yazo.com.br
          </a>
        </p>
      </div>
      <div className="card-hover-buttons">
        <button onClick={(e) => { e.stopPropagation(); onEdit(assinatura); }}>Editar</button>
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
