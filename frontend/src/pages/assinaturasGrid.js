// src/components/AssinaturasGrid.js
import React, { useState, useEffect } from 'react';
import AssinaturaCard from './assinaturaCard';
import AssinaturaModal from './assinaturaaModal';
import './assinaturaGrid.css'; // Para estilos personalizados

const AssinaturasGrid = () => {
  const [assinaturas, setAssinaturas] = useState([]);
  const [selectedAssinatura, setSelectedAssinatura] = useState(null);

  useEffect(() => {
    // Fetch assinaturas from API
    const fetchAssinaturas = async () => {
      const response = await fetch('http://localhost:3001/api/assinaturas');
      const data = await response.json();
      setAssinaturas(data);
    };

    fetchAssinaturas();
  }, []);

  const handleCardClick = (assinatura) => {
    setSelectedAssinatura(assinatura);
  };

  const handleCloseModal = () => {
    setSelectedAssinatura(null);
  };

  return (
    <div className="assinaturas-grid">
      {assinaturas.map((assinatura) => (
        <AssinaturaCard 
          key={assinatura.id} 
          assinatura={assinatura} 
          onClick={() => handleCardClick(assinatura)} 
        />
      ))}
      {selectedAssinatura && (
        <AssinaturaModal 
          assinatura={selectedAssinatura} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default AssinaturasGrid;
