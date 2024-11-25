import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import {
    mdiSignal, mdiWifi, mdiBattery,
    mdiMagnify, mdiQrcode, mdiAccount, mdiCalendar,
    mdiAccountGroup, mdiMapMarker, mdiTrophy, mdiPuzzle
} from '@mdi/js'; import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaMenu = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <h6>Menu</h6>
                                </div>
                            </div>
                            <div className="labelmenu">
                                <div className="labelmenu01">
                                    <img
                                        src="/assets/1.jpg"
                                        alt="Foto do Usuário"
                                        style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                    />
                                    <div>
                                        <div>
                                            <h6 style={{ color: textColor }}>Ana Clara</h6>
                                        </div>
                                        <div>
                                            <h6>Editar perfil</h6>
                                        </div>
                                    </div>

                                </div>


                                <div>
                                    <Icon path={mdiQrcode} color={primaryColor} size={0.5} className="icon-signal" />
                                </div>
                            </div>
                            <div>
                                <div className="menu-items">
                                    <div className="menu-item">
                                        <Icon path={mdiQrcode} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Minha Credencial</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiCalendar} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Programação</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiAccountGroup} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Palestrantes</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiAccount} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Patrocinadores</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiAccount} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Pessoas</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiMapMarker} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Mapa do Evento</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiTrophy} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Ranking</span>
                                    </div>
                                    <div className="menu-item">
                                        <Icon path={mdiPuzzle} size={0.8} style={{ color: primaryColor }} />
                                        <span style={{ marginLeft: '0px', }}>Quizzes</span>
                                    </div>
                                </div>

                                <div className="menu-logout">
                                    <button className="logout-button" style={{ backgroundColor: "#b1b1b1" }}>
                                        Sair
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
})

export default TelaMenu;
