import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const telaMatchMaking = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                </div>

                            </div>
                            <div className="labelmenu">
                                <div className="labelmenu01">
                                    <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                    <h6>Tags de interesse</h6>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="/assets/matchmakingImage.png" style={{ width: '100%', height: '100%' }} alt="App Icon"
                                    />
                                </div>
                            </div>

                            <div>
                                <h1 style={{ color: '#000', margin: '10px 10px 10px 10px' }}>Faça sua escolha</h1>
                                <h6 style={{ color: '#000', border: 'none', borderBottom: `2px solid #fff` }}>Escolha suas tags de interesse que nós te recomendamos as coisas ideias para você!</h6>
                            </div>
                            <div>
                                <button style={{fontSize: '10px',backgroundColor: primaryColor, color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Agro</button>
                                <button style={{fontSize: '10px', backgroundColor: "#8219384d", color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Esporte</button>
                                <button style={{fontSize: '10px', backgroundColor: "#8219384d", color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Saúde</button>
                                <button style={{fontSize: '10px', backgroundColor: primaryColor, color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Carros</button>
                                <button style={{fontSize: '10px',backgroundColor: primaryColor, color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Música e Arte</button>
                                <button style={{fontSize: '10px',backgroundColor: "#8219384d", color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Agro</button>
                                <button style={{fontSize: '10px',backgroundColor: "#8219384d", color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Esporte</button>
                                <button style={{fontSize: '10px',backgroundColor: primaryColor, color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Saúde</button>
                                <button style={{fontSize: '10px',backgroundColor: primaryColor, color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Carros</button>
                                <button style={{fontSize: '10px',backgroundColor: "#8219384d", color: 'white', margin: '0px 0px 10px 10px', padding:'10px', borderRadius: '8px', border: 'none'}}>Música e Arte</button>
                            </div>
                            <div>
                                <button style={{ backgroundColor: primaryColor, color: 'white', margin: '10px', padding:'10px', borderRadius: '8px', border: 'none', width: '90%'}}>Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default telaMatchMaking;
