import React, { useState, useEffect } from 'react';
import GamificationCard from './gamificationCard';
import { useNavigate } from 'react-router-dom';
import './gamificationGrid.css';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';



const GamificationGrid = () => {
  const navigate = useNavigate();
  const [rules, setRules] = useState([]);
  const [selectedRule, setSelectedRule] = useState(null);

  useEffect(() => {
    // Fetch gamification rules from API
    const fetchRules = async () => {
      const response = await fetch('http://localhost:3001/api/gamification-rules');
      let data = await response.json();

      // Ordena as regras para que a mais recente (maior ID) apareça primeiro
      data = data.sort((a, b) => b.id - a.id);

      setRules(data);
    };

    fetchRules();
  }, []);

  const handleDeleteGamificationRule = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar esta Regra?');
    if (confirmDelete){
        try {
            const response = await fetch(`http://localhost:3001/api/gamification-rules/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Atualizar a lista de regras de gamificação após a exclusão
                setRules(prevRules => prevRules.filter(rule => rule.id !== id));
                console.log('Regra de gamificação deletada com sucessooo');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao deletar a regra de gamificação');
            }
            
        } catch (error) {
            console.error('Erro ao deletar a regra de gamificação:', error.message);
        }
      }
    };

  const handleCardClick = (rule) => {
    console.log('Regra selecionada:', rule);
    setSelectedRule(rule);
  };

  const handleCloseModal = (updatedRule) => {
    setSelectedRule(null);
    if (updatedRule) {
      // Atualiza a lista de regras com a regra editada
      setRules((prevRules) => {
        const updatedList = prevRules.map((rule) =>
          rule.id === updatedRule.id ? updatedRule : rule
        );
        return updatedList.sort((a, b) => b.id - a.id); // Ordena novamente após a edição
      });
    }
  };

  const handleAddRule = () => {
    navigate('/regragame');
  };

  return (
    <div>
      <div className="header-buttons">
        <h1>Regras de Gamificação</h1>
        <button className="add-rule" onClick={handleAddRule}>Adicionar Regra</button>
      </div>

      <div className="gamification-grid">
        <div onClick={handleAddRule} className='gamification-card-plus'>
          <button onClick={handleAddRule}>
            <Icon path={mdiPlus} size={1} style={{ color: '#fff' }} />
          </button>
        </div>
        {rules.map((rule) => (
          <GamificationCard
            gamification={rule}
            key={rule.id}
            rule={rule}
            onClick={() => handleCardClick(rule)}
            onDeleteClick={handleDeleteGamificationRule}
          />
        ))}
      </div>
    </div>
  );
};

export default GamificationGrid;
