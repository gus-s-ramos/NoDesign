import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import './signature.css';
import { getCroppedImg } from './utils';
import { saveAs } from 'file-saver';

Modal.setAppElement('#root');

function Signature() {

    const cardStyle = {
        borderSpacing: '16px',
        display: 'flex',
    };

    const fotoStyle = {
        width: '100px',
        height: '100px'
    };

    const imgStyle = {
        width: '100%',
        borderRadius: '8px',
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

    const [imagemOriginal, setImagemOriginal] = useState(null);
    const [imagemCortada, setImagemCortada] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagemOriginal(URL.createObjectURL(file));
            setModalAberto(true);
        }
    };

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleConcluir = async () => {
        try {
            const croppedImage = await getCroppedImg(imagemOriginal, croppedAreaPixels);
            setImagemCortada(croppedImage);
            setModalAberto(false); // Fechar o modal após concluir o crop
            setCrop({ x: 0, y: 0 }); // Reiniciar as coordenadas do crop
            setZoom(1); // Reiniciar o zoom
        } catch (e) {
            console.error('Error cropping image:', e);
        }
    };

    const handleCancelar = () => {
        setImagemOriginal(null);
        setImagemCortada(null);
        setModalAberto(false);
        setCrop({ x: 0, y: 0 }); // Reiniciar as coordenadas do crop
        setZoom(1); // Reiniciar o zoom
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
                <td style="width:100px"><img style="width:100%; border-radius:8px" src="${imagemCortada ? URL.createObjectURL(imagemCortada) : ''}" alt="foto"></td>
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
            <div className="campos-para-assinatura">
                <h1>Criar assinatura de email</h1>
                <div>
                    <h1>Anexos</h1>
                    <input type="file" onChange={handleImagemChange} accept="image/*" />
                    <Modal isOpen={modalAberto} onRequestClose={handleCancelar}>
                        {imagemOriginal && (
                            <div style={{ position: 'relative', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Cropper
                                    image={imagemOriginal}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                />
                            </div>

                        )}
                        <button onClick={handleConcluir}>Concluir</button>
                        <button onClick={handleCancelar}>Cancelar</button>
                    </Modal>
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

            <div  >
                <h1>Visualização Assinatura</h1>
                <div className="visualizacao-assinatura">
                    <div  style={cardStyle}>
                        <div style={fotoStyle}>
                            <img
                                style={{ width: '100%', borderRadius: '8px' }}
                                src={imagemCortada ? URL.createObjectURL(imagemCortada) : ''}
                                alt="foto"
                            />
                        </div>
                        <div style={tdStyle}>
                        </div>
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
                <div>
                    <button> Baixar JPEG</button>
                    <button onClick={handleGenerateHTML}>Gerar HTML</button>
                </div>


            </div>

        </div>
    );
}

export default Signature;
