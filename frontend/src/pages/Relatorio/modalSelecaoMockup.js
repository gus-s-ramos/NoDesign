import React, { useState } from 'react';
import './modalSelecaoMockup.css';

const ITEMS_PER_PAGE = 12; // Máximo de itens por página, incluindo o botão "Adicionar Nova Tela"

function SelectScreensModal({ isOpen, onClose, selectedScreens, allScreens, setSelectedScreens }) {
    const [tempSelection, setTempSelection] = useState([...selectedScreens]);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(allScreens.length / (ITEMS_PER_PAGE - 1));

    // Função para obter os itens da página atual
    const getPaginatedScreens = () => {
        const start = currentPage * (ITEMS_PER_PAGE - 1);
        const end = start + (ITEMS_PER_PAGE - 1);
        return allScreens.slice(start, end);
    };

    // Alternar seleção de uma tela
    const toggleScreen = (screenId) => {
        if (tempSelection.includes(screenId)) {
            setTempSelection(tempSelection.filter((id) => id !== screenId));
        } else {
            setTempSelection([...tempSelection, screenId]);
        }
    };

    // Salvar seleção e fechar o modal
    const handleSave = () => {
        setSelectedScreens(tempSelection);
        onClose();
    };

    // Fechar modal se não estiver aberto
    if (!isOpen) return null;

    // Itens paginados da página atual
    const paginatedScreens = getPaginatedScreens();

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>Selecione as Telas</h1>
                <div className="screen-list-horizontal">
                    {paginatedScreens.map((screen) => (
                        <div
                            key={screen.id}
                            className={`screen-item ${tempSelection.includes(screen.id) ? 'selected' : ''}`}
                            onClick={() => toggleScreen(screen.id)}
                        >
                            <div className="screen-thumbnail">
                                {/* Renderiza o componente dinâmico */}
                                {screen.component({
                                    loginFile: 'https://placehold.co/1900x1500',
                                    splash: 'https://placehold.co/360x777',
                                    primaryColor: '#FFFFFF',
                                    secondaryColor: '#000000',
                                    headerColor: '#123456',
                                    textColor: '#000',
                                    isLightMode: true,
                                    logoTimeline: 'https://placehold.co/254x128',
                                    storeIcon: 'https://placehold.co/128x128',
                                    bannerStoreIcon: 'https://placehold.co/621x1344',
                                })}
                            </div>
                        </div>
                    ))}
                    {/* Botão "Adicionar Nova Tela" */}
                    <div
                        className="screen-item custom-screen"
                        onClick={() => alert('Adicionar tela personalizada')}
                    >
                        <div className="custom-screen-placeholder">+</div>
                        <p>Adicionar Nova Tela</p>
                    </div>
                </div>
                <div className="pagination-controls">
                    <button
                        disabled={currentPage === 0}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    >
                        Anterior
                    </button>
                    <span>
                        Página {currentPage + 1} de {totalPages}
                    </span>
                    <button
                        disabled={currentPage === totalPages - 1}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    >
                        Próxima
                    </button>
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSave}>Salvar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default SelectScreensModal;
