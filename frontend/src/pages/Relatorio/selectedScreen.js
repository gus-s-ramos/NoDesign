import React from 'react';

function SelectedScreen({ currentScreenIndex, screenRepresentations, handleScreenClick, handleAddScreen }) {
    return (
        <div className="selected-screen-container">
            {screenRepresentations.map((screen, index) => (
                <div
                    key={index}
                    className={`screen-thumbnail ${currentScreenIndex === index ? 'selected' : ''}`}
                    onClick={() => handleScreenClick(index)}
                >
                    Tela {index + 1}
                </div>
            ))}
            <button className="btn-add-screen" onClick={handleAddScreen}>
                + Adicionar Nova Tela
            </button>
        </div>
    );
}

export default SelectedScreen;
