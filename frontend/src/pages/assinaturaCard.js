// src/components/AssinaturaCard.js
import React from 'react';
import './assinaturaGrid.css';

const AssinaturaCard = ({ assinatura, onClick }) => {
    return (

        <div className='assinatura-card'>
            <div>
                <img src={`http://localhost:3001/${assinatura.imagem}`} alt={assinatura.nome} />
            </div>
            <div></div>
            <div >
                <h3 >{assinatura.nome}</h3>
                <h3>{assinatura.cargo} | Yazo</h3>
                <p>
                    <a href={`mailto:${assinatura.email}`}>
                        {assinatura.email}
                    </a>
                </p>
                <p>
                    <a href={`tel:${assinatura.telefone}`}>
                        {assinatura.telefone}
                    </a>
                </p>
                <p>
                    <a href="https://www.yazo.com.br">
                        yazo.com.br
                    </a>
                </p>
            </div>
        </div>
    );

};


export default AssinaturaCard;
