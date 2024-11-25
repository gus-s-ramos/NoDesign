import React, { useState } from 'react';
import ModalSelecaoMockup from './modalSelecaoMockup';

function ScreenInfo({ currentScreen, setCurrentScreen, allScreens }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMockupIndex, setSelectedMockupIndex] = useState(null); // Índice do mockup sendo editado

  const handleMockupChange = (selectedMockups) => {
    if (selectedMockupIndex !== null) {
      // Atualiza o mockup selecionado
      const updatedMockups = [...(currentScreen.mockups || [])];
      updatedMockups[selectedMockupIndex] = selectedMockups[0]; // Atualiza o mockup no índice específico
      setCurrentScreen({ ...currentScreen, mockups: updatedMockups });
      setSelectedMockupIndex(null);
    }
    setIsModalOpen(false);
  };

  const handleTitleChange = (e) => {
    setCurrentScreen({ ...currentScreen, title: e.target.value });
  };

  return (
    <div className="screen-info">
      {currentScreen.type === 'TelaInicialRelatorio' && (
        <div>
          <label htmlFor="title">Título da Capa:</label>
          <input
            id="title"
            type="text"
            value={currentScreen.title || ''}
            onChange={handleTitleChange}
          />

          <div className="mockup-list">
            <h3>Mockups Selecionados:</h3>
            {currentScreen.mockups?.length > 0 ? (
              currentScreen.mockups.map((mockup, index) => (
                <div
                  key={index}
                  className="mockup-item"
                  onClick={() => {
                    setSelectedMockupIndex(index); // Define o índice do mockup sendo editado
                    setIsModalOpen(true); // Abre o modal
                  }}
                >
                  <img
                    src={mockup.src}
                    alt={mockup.alt || `Mockup ${index + 1}`}
                    className="mockup-thumbnail"
                  />
                  <p>{mockup.alt || `Mockup ${index + 1}`}</p>
                </div>
              ))
            ) : (
              <p>Nenhum mockup selecionado</p>
            )}
          </div>

          <ModalSelecaoMockup
            allScreens={allScreens}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedScreens={[]} // Nenhum mockup selecionado inicialmente
            setSelectedScreens={handleMockupChange}
          />
        </div>
      )}
    </div>
  );
}

export default ScreenInfo;
