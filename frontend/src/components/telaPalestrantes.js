import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiArrowLeft, mdiCommentQuestionOutline, mdiEmailOutline, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaPalestrantes = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor, headerColor }, ref) => {
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
                                <h2 style={{ color: '#000' }}>Felipe Marques</h2>
                            </div>
                            <div className='bannerBackgroud' style={{ backgroundColor: primaryColor }}>
                                <div>
                                    <img src="/assets/foto01.jpeg" className='profilePicture' alt="App Icon"
                                    />
                                </div>
                            </div>
                            <div className='profileContent' style={{flexDirection: 'column', alignItems: 'center'}}>
                                <h2 style={{ marginBottom: '5px'}}>Felipe Marques</h2>
                                <p>Head de Marketing</p>
                            </div>

                            <div className='labelColetor' >
                                <h2>Enviar pergunta</h2>
                                <p>Envie uma pergunta para Felipe Marques</p>
                                <div>
                                
                                    <button style={{ backgroundColor: primaryColor, color: "#fff", borderTop: "1px solid #c7c7c7", borderRadius: "8px" }}> <Icon path={mdiCommentQuestionOutline} size={0.5} className="icon-battery" style={{ color: '#fff', marginRight: '5px' }} />Enviar pergunta</button>
                                </div>
                            </div>
                            <div className='labelColetor' >
                                <h2>Avalie a palestra</h2>
                                <p>Deixe sua opinião sobre este palestrante, para uma melhor experiência.</p>
                                <div>
                                
                                    <button style={{ backgroundColor: primaryColor, color: "#fff", borderTop: "1px solid #c7c7c7", borderRadius: "8px" }}> Enviar pergunta</button>
                                </div>
                            </div>
                            <div>
                                <button style={{ color: '#000', margin: '10px 10px 10px 10px', border: 'none', borderBottom: `2px solid ${primaryColor}` }}>Sobre</button>
                            </div>
                            <div style={{ margin: '0px 10px 10px 10px', }}>
                                
                                <div>
                                    <p>Head de marketing a 8 anos, CEO e co-fundador responsável pelo setor de Marketing na empresa Yazo, tem 10 anos de experiência, vivenciou </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default TelaPalestrantes;
