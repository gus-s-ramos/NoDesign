import React, { useState, useEffect } from 'react';
import GamificationCard from './gamificationCard';
import AssinaturaModal from './gamification';
import { useNavigate } from 'react-router-dom';
import './gamificationGrid.css';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

const GamificationGrid = () => {
  const navigate = useNavigate();
  const [assinaturas, setAssinaturas] = useState([]);
  const [selectedAssinatura, setSelectedAssinatura] = useState(null);

  useEffect(() => {
    // Fetch assinaturas from API
    const fetchAssinaturas = async () => {
      const response = await fetch('http://localhost:3001/api/assinaturas');
      let data = await response.json();

      // Ordena as assinaturas para que a mais recente (maior ID) apareça primeiro
      data = data.sort((a, b) => b.id - a.id);

      setAssinaturas(data);
    };

    fetchAssinaturas();
  }, []);

  const handleCardClick = (assinatura) => {
    console.log('Assinatura selecionada:', assinatura);
    setSelectedAssinatura(assinatura);
  };

  const handleCloseModal = (updatedAssinatura) => {
    setSelectedAssinatura(null);
    if (updatedAssinatura) {
      // Atualiza a lista de assinaturas com a assinatura editada
      setAssinaturas((prevAssinaturas) => {
        const updatedList = prevAssinaturas.map((assinatura) =>
          assinatura.id === updatedAssinatura.id ? updatedAssinatura : assinatura
        );
        return updatedList.sort((a, b) => b.id - a.id); // Ordena novamente após a edição
      });
    }
  };

  const handleAddGamification = () => {
    navigate('/regragame');
  };

  return (
    <div>
      <div className="header-buttons">
        <h1>Regras Gamificação</h1>
        <button className="add-signature" onClick={handleAddGamification}>Cria regra</button>
      </div>

      <div className="gamification-grid">
        <div onClick={handleAddGamification} className='gamification-card-plus'>
          <button onClick={handleAddGamification}>
            <Icon path={mdiPlus} size={1} style={{ color: '#fff' }} />
          </button>
        </div>
        {assinaturas.map((assinatura) => (
          <GamificationCard
            key={assinatura.id}
            assinatura={assinatura}
            onClick={() => handleCardClick(assinatura)}
          />
        ))}
        {selectedAssinatura && (
          <AssinaturaModal
            assinatura={selectedAssinatura}
            onClose={handleCloseModal}
            onSave={(updatedAssinatura) => handleCloseModal(updatedAssinatura)}
          />
        )}
      </div>
    </div>
  );
};

export default GamificationGrid;
