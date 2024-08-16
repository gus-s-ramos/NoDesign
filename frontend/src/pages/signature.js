import React from 'react';
import './signature.css';
import { useNavigate } from 'react-router-dom';

function Signature() {

    const navigate = useNavigate();

    const handleAddSignature = () => {
        navigate('/assinaturaModal');
    };
    return (
        <div className="assinaturaContainer">
            <div className="headerAssinatura">
                <h1>Assinaturas</h1>
                <div className="header-buttons">
                    <button className="add-signature" onClick={handleAddSignature}>Adicionar assinatura</button>
                    <button className="add-team" >Adicionar time</button>
                </div>
            </div>

            <div className="category">
                <h1>Sem segmentação</h1>
                <div className="category-items">
                    <div className="item">
                        <button className="add-button">+</button>
                    </div>
                    <div className="item">
                        <button className="edit-button"><i className="icon-edit"></i></button>
                    </div>
                    <div className="item">
                        <button className="copy-button"><i className="icon-copy"></i></button>
                    </div>
                    <div className="item">
                        <button className="copy-button"><i className="icon-copy"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signature;
