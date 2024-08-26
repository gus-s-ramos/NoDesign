import React, { useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import './assinaturaModal.css';
import axios from 'axios'; // Importe o axios para as requisições
import { getCroppedImg } from './utils';
import { saveAs } from 'file-saver';
import ModalAssinatura from '../components/ModalAssinatura';

Modal.setAppElement('#root');

function AssinaturaModal() {

    const [splash, setSplash] = useState('/assets/user.webp');
    const inputFileRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedImage(URL.createObjectURL(selectedFile)); // Armazena temporariamente a imagem selecionada
        setModalOpen(true); // Abre o modal ao selecionar a imagem
      };
      
      const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null); // Limpa a imagem selecionada ao fechar o modal sem salvar
      };
    
      const handleSaveImage = (imageSrc) => {
        setSplash(imageSrc); // Salva a imagem no estado principal (asset) após confirmar no modal
        setModalOpen(false); // Fecha o modal após salvar
        setSelectedImage(null); // Limpa a imagem selecionada
      };

    const cardStyle = {
        borderSpacing: '16px',
        display: 'flex',
    };

    const fotoStyle = {
        width: '100px',
        height: '100px'
    };

    const tdStyle = {
        width: '2px',
        backgroundColor: '#ffa00c',
        marginLeft: '16px',
        marginRight: '16px'
    };

    const infoStyle = {
        lineHeight: '2px',
        color: '#000000',
        textDecoration: 'none',
    };

    const h3Style = {
        color: '#ffa00c',
    };

    const linkStyle = {
        lineHeight: '2px',
        color: '#000000',
        textDecoration: 'none',
    };

    const [nome, setNome] = useState("Nome");
    const [sobrenome, setSobrenome] = useState("Sobrenome");
    const [cargo, setCargo] = useState("Cargo");
    const [telefone, setTelefone] = useState("(DDD) XXXXX-XXXX");
    const [email, setEmail] = useState("email@yazo.com");


    const handleSave = async () => {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('cargo', cargo);
        formData.append('telefone', telefone);
        formData.append('email', email);
        
        // Converte a URL da imagem em um Blob para enviar como arquivo
        const response = await fetch(splash);
        const blob = await response.blob();
        formData.append('imagem', blob, 'imagem.png');
    
        try {
            const res = await axios.post('http://localhost:3001/api/assinaturas', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Assinatura salva com sucesso:', res.data);
        } catch (error) {
            console.error('Erro ao salvar assinatura:', error);
        }
    };




    // Exemplo de função para gerar HTML e salvar como arquivo
    const handleGenerateHTML = () => {
        const html = `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Assinatura</title>
          </head>
          <body>
            <table style="border-spacing: 16px">
              <tr>
                <td style="width:100px"><img style="width:100%; border-radius:8px" src="" alt="foto"></td>
                <td style="background: #ffa00c; width:1px;"></td>
                <td style="line-height: 2px; color:#000000; text-decoration: none;">
                  <h3 style="color:#ffa00c">${nome} ${sobrenome}</h3>
                  <h4>${cargo} | Yazo</h4>
                  <p><a style="line-height: 2px; color:#000000; text-decoration: none;" href="mailto:${email}">${email}</a></p>
                  <p><a style="line-height: 2px; color:#000000; text-decoration: none;" href="tel:${telefone}">${telefone}</a></p>
                  <p><a style="line-height: 2px; color:#000000; text-decoration: none;" href="https://www.yazo.com.br">yazo.com.br</a></p>
                </td>
              </tr>
            </table>
          </body>
        </html>
        `;
        const blob = new Blob([html], { type: 'text/html' });
        saveAs(blob, 'assinatura.html');
    };

    return (
        <div className="signature-container">
            <div className="campos-para-criar-assinatura">
                <h1>Criar assinatura de email</h1>
                <div style={{ marginBottom: '15px' }}>

                    <h1>Anexos</h1>
                    <img src={splash}  onClick={() => inputFileRef.current.click()} className="assinaturaImg" />
                    <input
                        ref={inputFileRef}
                        type="file"
                        onChange={handleChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <ModalAssinatura isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveImage} imageSrc={selectedImage} />

                </div>
                <h1>Dados Pessoais</h1>
                <div>
                    <input type="text" placeholder={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder={cargo} onChange={(e) => setCargo(e.target.value)} />
                    <input type="text" placeholder={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <input type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='assinatura-preview'>
                <h1>Visualização Assinatura</h1>
                <div className="visualizacao-assinatura">
                    <div style={cardStyle}>
                        <div style={fotoStyle}>
                        <img src={splash}  onClick={() => inputFileRef.current.click()} className="assinaturaImg" />

                        </div>
                        <div style={tdStyle}></div>
                        <div style={infoStyle}>
                            <h3 style={h3Style}>{nome} {sobrenome}</h3>
                            <h3>{cargo} | Yazo</h3>
                            <p>
                                <a style={linkStyle} href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                            <p>
                                <a style={linkStyle} href={`tel:${telefone}`}>
                                    {telefone}
                                </a>
                            </p>
                            <p>
                                <a style={linkStyle} href="https://www.yazo.com.br">
                                    yazo.com.br
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={handleSave}>Salvar</button>
                <button onClick={handleGenerateHTML}>Gerar HTML</button>
            </div>
        </div>
    );
}

export default AssinaturaModal;
