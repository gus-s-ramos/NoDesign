import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaPatrocinadores = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <h6>Patrocinadores</h6>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/assets/bannerPatrocinio.png"
                                    alt="Foto do Usuário"
                                    style={{ width: '235px', height: '100%', borderRadius: '8px' }}
                                />
                            </div>
                            <div>
                                <img
                                    src="/assets/logoYazo.png"
                                    alt="Foto do Usuário"
                                    style={{ width: '50px', height: '50px', borderRadius: '8px', border: 'solid, 1px, #fff',marginLeft: '10px', marginTop: '-25px' }}
                                />
                                <div>
                                    <div>
                                        <h2>Yazo</h2>
                                        <p>Conectando Experiências</p>
                                    </div>
                                    <Icon path={mdiHeartOutline} size={0.5} className="icon-signal" />
                                </div>
                            </div>
                            <div style={{ display: 'ruby-text'}}>
                                <button style={{ backgroundColor: '#f1f1f1', color: primaryColor , height: '30px', borderRadius: '8px', border: 'solid 1px' }}>Tag do patrocinador #1</button>
                                <button style={{ backgroundColor: '#f1f1f1', color: primaryColor , height: '30px', borderRadius: '8px', border: 'solid 1px' }}>Tag do patrocinador #2</button>
                            </div>
                            <div>
                                <Icon path={mdiHeartOutline} size={0.8} className="icon-signal" />
                                <Icon path={mdiHeartOutline} size={0.8} className="icon-signal" />
                                <Icon path={mdiHeartOutline} size={0.8} className="icon-signal" />
                                <Icon path={mdiHeartOutline} size={0.8} className="icon-signal" />
                            </div>
                            <div>
                            </div>
                            <div>
                                <button style={{ backgroundColor: primaryColor, color: '#fff', height: '30px', width: '90%', margin: '10px 10px 10px 10px', borderRadius: '8px', border: 'none' }}>Agendar reuniões</button>
                                <button style={{ backgroundColor: primaryColor, color: '#fff', height: '30px', width: '90%', margin: '0px 10px 10px 10px', borderRadius: '8px', border: 'none' }}>Botão adicionado pelo patrocinador</button>
                            </div>
                            <div>
                            </div>
                            <div>
                                <button>Visão geral</button>
                                <button>Sobre</button>
                                <button>Publicação</button>
                                <button>Produtos</button>
                            </div>
                            <div>
                                <h2>Sobre</h2>
                                <p>Conecte pessoas, marcas e experiências no seu evento. Engaje seu público com o conteúdo, gere mais leads para seus Expositores e tenha os dados na palma da mão em tempo real através de ferramentas intuitivas.</p>
                            </div>
                            <div>
                                <h2>Publicações do patrocinador</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default TelaPatrocinadores;
