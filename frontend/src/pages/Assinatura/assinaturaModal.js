import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { saveAs } from 'file-saver';
import ModalAssinatura from '../../components/ModalAssinatura';
import './assinaturaModal.css';

Modal.setAppElement('#root');

function AssinaturaModal({ assinatura, onSave }) {
    const [splash, setSplash] = useState(assinatura?.splash || '/assets/user.webp');
    const inputFileRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (assinatura) {
            setNome(assinatura.nome);
            setSobrenome(assinatura.sobrenome);
            setCargo(assinatura.cargo);
            setTelefone(assinatura.telefone);
            setEmail(assinatura.email);
            setSplash(assinatura.splash || '/assets/user.webp');
        }
    }, [assinatura]);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedImage(URL.createObjectURL(selectedFile));
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const handleSaveImage = (imageSrc) => {
        setSplash(imageSrc);
        setModalOpen(false);
        setSelectedImage(null);
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
            onSave(res.data); // Callback após salvar a assinatura
        } catch (error) {
            console.error('Erro ao salvar assinatura:', error);
        }
    };

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
                <td style="width:100px"><img style="width:100%; border-radius:8px" src="${splash}" alt="foto"></td>
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
                <h1>{assinatura ? 'Editar Assinatura' : 'Criar Assinatura de Email'}</h1>
                <div style={{ marginBottom: '15px' }}>
                    <h1>Anexos</h1>
                    <img src={splash} onClick={() => inputFileRef.current.click()} className="assinaturaImg" alt="Assinatura" />
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
                <div style={{ display: 'flex' }}>
                    <input type="text" placeholder={nome} value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder={sobrenome} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <div style={{ display: 'flex' }}>
                    <input type="text" placeholder={cargo} value={cargo} onChange={(e) => setCargo(e.target.value)} />
                    <input type="text" placeholder={telefone} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>
                <input type="text" placeholder={email} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='assinatura-preview'>
                <h1>Visualização Assinatura</h1>
                <div className="visualizacao-assinatura">
                    <div style={{ borderSpacing: '16px', display: 'flex' }}>
                        <div style={{ width: '100px', height: '100px' }}>
                            <img src={splash} onClick={() => inputFileRef.current.click()} className="assinaturaImg" alt="Assinatura" />
                        </div>
                        <div style={{ width: '2px', backgroundColor: '#ffa00c', marginLeft: '16px', marginRight: '16px' }}></div>
                        <div style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }}>
                            <h3 style={{ color: '#ffa00c' }}>{nome} {sobrenome}</h3>
                            <h3>{cargo} | Yazo</h3>
                            <p>
                                <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }} href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                            <p>
                                <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }} href={`tel:${telefone}`}>
                                    {telefone}
                                </a>
                            </p>
                            <p>
                                <a style={{ lineHeight: '2px', color: '#000000', textDecoration: 'none' }} href="https://www.yazo.com.br">
                                    yazo.com.br
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={handleSave}>{assinatura ? 'Salvar Alterações' : 'Salvar'}</button>
                <button onClick={handleGenerateHTML}>Gerar HTML</button>
            </div>
        </div>
    );
}

export default AssinaturaModal;
