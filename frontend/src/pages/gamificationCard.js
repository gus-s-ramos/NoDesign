// src/components/gamificationCard.js
import React from 'react';
import './gamificationCard.css';

const GamificationCard = ({ gamification, rule, onClick, onEditClick, onDeleteClick, handleDeleteGamificationRule }) => {
    return (

        <div className='gamification-card' onClick={onClick}>
            <div>
                <img
                    src={`http://localhost:3001/${rule.logo_image_url}`}
                    alt={rule.title}
                    className="gamification-rule-card-image"
                />
            </div>
            <div >
            </div>
            <div className="card-hover-buttons">
                <button onClick={(e) => { e.stopPropagation(); onEditClick(gamification); }}>Editar</button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteClick(gamification.id); }}>Excluir</button>
            </div>
        </div>
    );

};


export default GamificationCard;
