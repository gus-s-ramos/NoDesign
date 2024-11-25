import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiCommentQuestionOutline, mdiArrowLeft, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaQrCode = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor, headerColor }, ref) => {
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="timeline-content">
                        <div className="screenfour">
                            <div className="menuNotch" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" style={{ color: '#000' }} />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" style={{ color: '#000' }} />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" style={{ color: '#000' }} />
                                </div>

                            </div>
                            <div className="menuHeaderProfile" style={{ backgroundColor: headerColor, border: `2px solid ${headerColor}` }}>
                                <Icon path={mdiArrowLeft} size={0.5} className="icon-battery" style={{ color: '#000' }} />
                                <h2 style={{ color: '#000' }}>QrCode</h2>
                            </div>
                            <div className='bannerBackgroud' style={{ backgroundColor: "#fff", alignItems: 'normal', paddingBottom: '150px', marginBottom: '0px', marginTop: '30px' }}>
                                <div style={{    display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <img src="/assets/foto01.jpeg" style={{ width: '60px', height: '60px', marginBottom: '50px', marginTop: '-30px', borderRadius: '16px' }} className='profilePicture' alt="App Icon"
                                    />
                                    <div style={{ flexDirection: "column", alignItems: "center"}}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h6>Felipe Marques</h6>
                                        <p>QrCode do perfil</p>
                                    </div>
                                    <div>
                                        <img src="/assets/Vector.png" style={{ width: '60px', height: '60px', marginTop: '20px' }} className='profilePicture' alt="App Icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='profileContent' style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '0px' }}>
                            <p style={{ marginBottom: '5px', margin:'10px', textAlign: 'center' }}>As pessoas com quem você compartilhar seu QR Code,
                                poderão usar a câmera de seu celular para escaneá-lo
                                e acessar o seu perfil.</p>
                            
                        </div>
                        <button style={{ backgroundColor: primaryColor, color: "#fff", borderTop: "1px solid #c7c7c7", borderRadius: "8px", margin: '10px',marginTop: '90px', padding: '10px', width: '90%' }}> Escanear QrCode</button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
})

export default TelaQrCode;
