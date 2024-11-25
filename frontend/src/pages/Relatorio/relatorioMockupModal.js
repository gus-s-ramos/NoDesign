// TelaModal.js
import React, { useState } from 'react';
import './telaModal.css';

function TelaModal({ screens, isOpen, onClose, onSelect }) {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

    if (!isOpen) return null;

    const startIdx = currentPage * itemsPerPage;
    const currentScreens = screens.slice(startIdx, startIdx + itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (startIdx + itemsPerPage < screens.length) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h3>Select a Screen</h3>
                <div className="screensGrid">
                    {currentScreens.map((ScreenComponent, index) => (
                        <div key={index} className="screenWrapper">
                            <ScreenComponent />
                        </div>
                    ))}
                </div>
                <div className="paginationControls">
                    <button onClick={handlePrevious} disabled={currentPage === 0}>Previous</button>
                    <button onClick={handleNext} disabled={startIdx + itemsPerPage >= screens.length}>Next</button>
                </div>
                <div className="modalActions">
                    <button onClick={onSelect}>Select</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default TelaModal;
