import React, { useState, useEffect } from 'react';
import AssinaturaCard from './assinaturaCard';
import AssinaturaModal from './assinaturaModal';
import { useNavigate } from 'react-router-dom';
import './assinaturaGrid.css';
import './assinaturaModal.css';
import Icon from '@mdi/react';
import { mdiPlus, mdiDelete } from '@mdi/js';

const AssinaturasGrid = () => {
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

        // Atualiza a lista de assinaturas após a exclusão
        setAssinaturas((prevAssinaturas) => prevAssinaturas.filter(assinatura => assinatura.id !== id));
      } catch (error) {
        console.error('Erro ao deletar a assinatura:', error);
      }
    }
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
            onDelete={() => handleDeleteSignature(assinatura.id)} // Passando a função de deletar
          />
        ))}
        
      </div>
    </div>
  );
};

export default AssinaturasGrid;
