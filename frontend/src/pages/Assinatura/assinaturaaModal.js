import React, { useState } from 'react';
import './assinaturaModal.css';

const AssinaturaModal = ({ assinatura, onClose, onSave }) => {
  // Usando os valores corretos da assinatura
  const [nome, setNome] = useState(assinatura.nome);
  const [sobrenome, setSobrenome] = useState(assinatura.sobrenome);
  const [cargo, setCargo] = useState(assinatura.cargo);
  const [telefone, setTelefone] = useState(assinatura.telefone);
  const [email, setEmail] = useState(assinatura.email);
  const [croppedImageUrl, setCroppedImageUrl] = useState(assinatura.cropped_image_url);

  const handleSave = async () => {
    const updatedAssinatura = {
      ...assinatura,
      nome: nome,
      sobrenome: sobrenome,
      cargo: cargo,
      telefone: telefone,
      email: email,
      cropped_image_url: croppedImageUrl,
    };

    try {
      const response = await fetch(`http://localhost:3001/api/assinaturas/${assinatura.id}`, {
        method: 'PUT', // ou 'PATCH' dependendo da sua API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAssinatura),
      });

      if (response.ok) {
        const updatedData = await response.json();
        onSave(updatedData); // Atualiza o estado no frontend
        onClose();
      } else {
        console.error('Falha ao atualizar a assinatura.');
      }
    } catch (error) {
      console.error('Erro ao salvar a assinatura:', error);
    }
  };


  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Assinatura</h2>
        <div className="campos-para-assinatura">
          <div>
            <img
              src={`http://localhost:3001/${assinatura.imagem}`}
              alt="Assinatura"
              onClick={() => document.getElementById('imageUpload').click()}
            />
            <input
              type="file"
              id="imageUpload"
              onChange={(e) => setCroppedImageUrl(URL.createObjectURL(e.target.files[0]))}
              style={{ display: 'none' }}
            />
          </div>
          <div>
            <div >
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </div>
            <div className='inputAssinatura'>
              <input
                type="text"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AssinaturaModal;
