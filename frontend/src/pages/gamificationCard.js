// src/components/AssinaturaCard.js
import React from 'react';
import './gamificationCard.css';

const GamificationCard = ({ assinatura, onClick, onEditClick, onDeleteClick }) => {
    return (

        <div className='gamification-card' onClick={onClick}>
            <div>
                <img src={`http://localhost:3001/${assinatura.imagem}`} alt={assinatura.nome} />
            </div>
            <div >
            </div>
            <div className="card-hover-buttons">
                <button onClick={(e) => { e.stopPropagation(); onEditClick(assinatura); }}>Editar</button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteClick(assinatura.id); }}>Excluir</button>
            </div>
        </div>
    );

};


export default GamificationCard;
