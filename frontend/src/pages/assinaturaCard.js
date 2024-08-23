// src/components/AssinaturaCard.js
import React from 'react';
import './assinaturaCard.css';

const AssinaturaCard = ({ assinatura, onClick, onEditClick, onDeleteClick }) => {
    return (

        <div className='assinatura-card' onClick={onClick}>
            <div>
                <img src={`http://localhost:3001/${assinatura.imagem}`} alt={assinatura.nome} />
            </div>
            <div className='divisoriaassinatura'></div>
            <div >
                <h3 >{assinatura.nome} {assinatura.sobrenome}</h3>
                <h3>{assinatura.cargo} | Yazo</h3>
                <p>
                    <a>
                        {assinatura.email}
                    </a>
                </p>
                <p>
                    <a>
                        {assinatura.telefone}
                    </a>
                </p>
                <p>
                    <a>
                        yazo.com.br
                    </a>
                </p>
            </div>
            <div className="card-hover-buttons">
                <button onClick={(e) => { e.stopPropagation(); onEditClick(assinatura); }}>Editar</button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteClick(assinatura.id); }}>Excluir</button>
            </div>
        </div>
    );

};


export default AssinaturaCard;
