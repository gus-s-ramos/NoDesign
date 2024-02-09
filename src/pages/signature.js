import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiInstagram, mdiFacebook, mdiPhone, mdiEmail, mdiWeb } from '@mdi/js';
import './signature.css';
import { getCroppedImg } from './utils';

Modal.setAppElement('#root');

function Signature() {
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
        } catch (e) {
            console.error('Error cropping image:', e);
        }
    };

    const handleCancelar = () => {
        setImagemOriginal(null);
        setImagemCortada(null);
        setModalAberto(false);
    };

    return (
        <div className="signature-container">
            <div className="campos-para-assinatura">
                <h1>Anexos</h1>
                <div>
                    <input type="file" onChange={handleImagemChange} accept="image/*" />
                    <Modal isOpen={modalAberto} onRequestClose={() => setModalAberto(false)}>
                        {imagemOriginal && (
                            <div style={{ position: 'relative', width: 250, height: 250 }}>
                                <Cropper
                                    image={imagemOriginal}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
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

                <h1>Redes Sociais</h1>
                <input type="text" placeholder="LINKEDIN" />
                <input type="text" placeholder="FACEBOOK" />
                <input type="text" placeholder="INSTAGRAM" />
                <h1>Outros Dados</h1>
                <input type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="visualizacao-assinatura" >
                <h1>Visualização Assinatura</h1>
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: '20px' }}>
                    <div>
                        <div className="foto">
                            <img
                                style={{ width: '150px', borderRadius: '0px', boxShadow: '10px 10px 0px 0px #821938' }}
                                src={imagemCortada ? URL.createObjectURL(imagemCortada) : ''}
                                alt="foto da Mariana"
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '50%', flexDirection: 'column', textAlign: 'right', marginLeft: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <p className="montserrat-semibold" style={{ marginRight: '10px' }}>{nome}</p>
                            <p className="montserrat-semibold">{sobrenome}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p className="lato-regular" style={{ color: '#6e6e6e' }}>{cargo} | Yazo</p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/yazotecnologia " target="_blank" rel="noopener noreferrer">
                                <Icon path={mdiLinkedin} size={1} style={{ marginRight: '10px', color: '#821938' }} />
                            </a>
                            <a href="https://www.instagram.com/yazoapp/" target="_blank" rel="noopener noreferrer">
                                <Icon path={mdiInstagram} size={1} style={{ marginRight: '10px', color: '#821938' }} />
                            </a>
                            <a href="https://www.facebook.com/yazoapp " target="_blank" rel="noopener noreferrer">
                                <Icon path={mdiFacebook} size={1} style={{ color: '#821938' }} />
                            </a>
                        </div>
                    </div>

                    <div style={{ marginLeft: '15px', marginRight: '15px' }}>
                        <div className="vertical-bar"></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon path={mdiPhone} size={1} style={{ marginRight: '10px', color: '#821938' }} />
                                <p style={{ margin: '0', lineHeight: '2px' }}><a style={{ textDecoration: 'none' }} href="phone:43996530860">{telefone}</a></p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon path={mdiEmail} size={1} style={{ marginRight: '10px', color: '#821938' }} />
                                <p style={{ margin: '0', lineHeight: '2px' }}><a style={{ textDecoration: 'none' }} href="mailto:mariana.camilo@yazo.com.br">{email}</a></p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon path={mdiWeb} size={1} style={{ marginRight: '10px', color: '#821938' }} />
                                <p style={{ margin: '0', lineHeight: '2px' }}><a style={{ textDecoration: 'none' }} href="https://www.yazo.com.br">www.yazo.com.br</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button> Baixar JPEG</button>
                    <button> Baixar HTML</button>
                </div>
            </div>
        </div>
    );
}

export default Signature;
