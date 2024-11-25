import React, { useState, useEffect } from 'react';
import RelatorioCard from './relatorioCard'; // Componente para exibir cada relatório individualmente
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';


const RelatorioGrid= () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/reports');
        const data = await response.json();
        data.sort((a, b) => b.id - a.id); // Ordena do mais recente para o mais antigo
        setReports(data);
      } catch (error) {
        console.error('Erro ao buscar relatórios:', error);
      }
    };

    fetchReports();
  }, []);

  const handleCardClick = (report) => {
    setSelectedReport(report);
    setModalOpen(true);
  };

  const handleAddReport = () => {
    navigate('/relatorioCreate'); // Navega para a página de criação de um novo relatório
  };

  const handleDeleteReport = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar este relatório?');
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:3001/api/reports/${id}`, { method: 'DELETE' });
        setReports(prevReports => prevReports.filter(report => report.id !== id));
      } catch (error) {
        console.error('Erro ao deletar o relatório:', error);
      }
    }
  };

  const handleEditReport = (report) => {
    setSelectedReport(report);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedReport(null);
  };

  return (
    <div>
      <div className="header-buttons">
        <h1>Relatórios</h1>
        <button className="add-report" onClick={handleAddReport}>Criar novo relatório</button>
      </div>

      <div className="reports-grid">
        <div onClick={handleAddReport} className="report-card-plus">
          <button onClick={handleAddReport}>
            <Icon path={mdiPlus} size={1} style={{ color: '#fff' }} />
          </button>
        </div>
        {reports.map((report) => (
          <RelatorioCard
            key={report.id}
            report={report}
            onClick={() => handleCardClick(report)}
            onEdit={handleEditReport}
            onDelete={() => handleDeleteReport(report.id)}
          />
        ))}
      </div>

      
    </div>
  );
};

export default RelatorioGrid;
