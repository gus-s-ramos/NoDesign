// src/components/AssinaturasGrid.js
import React, { useState, useEffect } from 'react';
import AssinaturaCard from './assinaturaCard';
import AssinaturaModal from './assinaturaModal';
import { useNavigate } from 'react-router-dom';
import './assinaturaGrid.css';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const AssinaturasGrid = () => {
  const navigate = useNavigate();
  const [assinaturas, setAssinaturas] = useState([]);
  const [selectedAssinatura, setSelectedAssinatura] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchAssinaturas = async () => {
      const response = await fetch('http://localhost:3001/api/assinaturas');
      const data = await response.json();
      data.sort((a, b) => b.id - a.id);
      setAssinaturas(data);
    };

    fetchAssinaturas();
  }, []);

  const handleCardClick = (assinatura) => {
    setSelectedAssinatura(assinatura);
    setModalOpen(true);
  };

  const handleAddSignature = () => {
    navigate('/assinaturaModal');
  };

  const handleDeleteSignature = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar esta assinatura?');
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:3001/api/assinaturas/${id}`, {
          method: 'DELETE',
        });
        setAssinaturas(prevAssinaturas => prevAssinaturas.filter(assinatura => assinatura.id !== id));
      } catch (error) {
        console.error('Erro ao deletar a assinatura:', error);
      }
    }
  };

  const handleEdit = (assinatura) => {
    setSelectedAssinatura(assinatura);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedAssinatura(null);
  };

  return (
    <div>
      <div className="header-buttons">
        <h1>Assinaturas</h1>
        <button className="add-signature" onClick={handleAddSignature}>Adicionar assinatura</button>
      </div>

      <div className="assinaturas-grid">
        <div onClick={handleAddSignature} className='assinatura-card-plus'>
          <button onClick={handleAddSignature}>
            <Icon path={mdiPlus} size={1} style={{ color: '#fff' }} />
          </button>
        </div>
        {assinaturas.map((assinatura) => (
          <AssinaturaCard
            key={assinatura.id}
            assinatura={assinatura}
            onClick={() => handleCardClick(assinatura)}
            onEdit={handleEdit}
            onDelete={() => handleDeleteSignature(assinatura.id)}
          />
        ))}
      </div>

      {modalOpen && (
        <AssinaturaModal
          assinatura={selectedAssinatura}
          onClose={handleModalClose}
          onSave={(updatedAssinatura) => {
            setAssinaturas(prevAssinaturas => 
              prevAssinaturas.map(assinatura => 
                assinatura.id === updatedAssinatura.id ? updatedAssinatura : assinatura
              )
            );
            handleModalClose();
          }}
        />
      )}
    </div>
  );
};

export default AssinaturasGrid;
