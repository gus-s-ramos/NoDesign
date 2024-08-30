import React, { useState, useRef } from 'react';
import './Modal.css'; // Arquivo CSS para estilização do modal
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ModalStoreIconSelector = ({ isOpen, onClose, onSave, imageSrc, onResetImage }) => {
    const [crop, setCrop] = useState({
        unit: '%', // Valores relativos em porcentagem
        x: 10, // Posição horizontal inicial do recorte
        y: 10, // Posição vertical inicial do recorte
        width: 15, // Largura inicial do recorte
        height: 15, // Altura inicial do recorte
        aspect: 128 / 128,
    });
    const [completedCrop, setCompletedCrop] = useState(null);
    const imgRef = useRef(null);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (completedCrop && imgRef.current) {
            const croppedImageUrl = await getCroppedImg(imgRef.current, completedCrop);
            onSave(croppedImageUrl); // Passa a imagem de volta para o componente pai
        }
        handleClose();
    };

    const handleCancel = () => {
        handleClose();
        onResetImage(); // Reseta a seleção de imagem no componente pai
    };

    const handleClose = () => {
        onClose();
        setCompletedCrop(null);
        setCrop({
            unit: '%',
            x: 10,
            y: 10,
            width: 19,
            height: 15,
            aspect: 128 / 128,
        });
    };

    const getCroppedImg = (image, crop) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }
                blob.name = 'cropped.jpg';
                const fileUrl = window.URL.createObjectURL(blob);
                resolve(fileUrl);
            }, 'image/jpeg');
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="header-modal">
                    <h2>Cortar a imagem</h2>
                    <button className="close-button" onClick={handleCancel}>×</button>
                </div>
                <div className='linebar'></div>
                <div className="modal-content01">
                    <ReactCrop
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={128 / 128}
                    >
                        <img ref={imgRef} src={imageSrc} alt="Imagem para cortar" />
                    </ReactCrop>
                </div>
                <div className="modal-buttons">
                    <button className="modal-button" onClick={handleSave}>Salvar</button>
                    <button className="modal-button-cancel" onClick={handleCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalStoreIconSelector;
