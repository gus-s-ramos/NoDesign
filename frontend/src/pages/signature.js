import React, { useState, useEffect } from 'react';
import './signature.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signature() {
    const navigate = useNavigate();
    const [signatures, setSignatures] = useState([]);

    useEffect(() => {
        // Fetch signatures from API
        const fetchSignatures = async () => {
            try {
                const response = await axios.get('/api/assinaturas');
                setSignatures(response.data);
            } catch (error) {
                console.error('Error fetching signatures:', error);
            }
        };

        fetchSignatures();
    }, []);

    const handleAddSignature = () => {
        navigate('/assinaturaModal');
    };

    const handleEditSignature = (id) => {
        navigate(`/assinaturaModal/${id}`);
    };

    const handleCopySignature = (id) => {
        // Add logic to copy the signature
        console.log('Copy signature:', id);
    };

    return (
        <div className="assinaturaContainer">
            <div className="headerAssinatura">
                <h1>Assinaturas</h1>
                <div className="header-buttons">
                    <button className="add-signature" onClick={handleAddSignature}>Adicionar assinatura</button>
                    <button className="add-team">Adicionar time</button>
                </div>
            </div>

            <div className="category">
                <h1>Sem segmentação</h1>
                <div className="category-items">
                    {signatures.length === 0 ? (
                        <p>Nenhuma assinatura cadastrada.</p>
                    ) : (
                        signatures.map(signature => (
                            <div key={signature.id} className="item">
                                <button className="edit-button" onClick={() => handleEditSignature(signature.id)}>
                                    <i className="icon-edit"></i>
                                </button>
                                <button className="copy-button" onClick={() => handleCopySignature(signature.id)}>
                                    <i className="icon-copy"></i>
                                </button>
                            </div>
                        ))
                    )}
                    <div className="item">
                        <button className="add-button">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signature;
