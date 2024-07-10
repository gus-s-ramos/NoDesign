import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';
import './screenTwoStore.css';



function ScreenTwoStore({ headerColor, logoTimeline }) {
    
    return (
        <div>
            <div className="storePrint" style={{ backgroundColor: headerColor }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '63px', height: '32px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <h5>Tenha contato com os outros participantes!</h5>
                <div>
                    <div className="screenStore" style={{ marginTop: '40px' }}>
                        <div className="timeline-content">
                            <div className="screenfour">
                                <div className="menuNotch" style={{ color: 'black' }}>
                                    <p>9:41</p>
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
                                        <h5>Área de networking</h5>
                                    </div>
                                    <div className="labelmenu01">

                                        <Icon path={mdiTuneVertical} size={0.5} className="icon-signal" />
                                    </div>
                                </div>
                                <div className='networkingButton'>
                                    <button className='buttonprimary'>Todos</button>
                                    <button className='buttonsecundary'>Contatos</button>
                                    <button className='buttonsecundary'>Pendentes</button>
                                </div>
                                <div>
                                    <div className="searchBar">
                                        <Icon path={mdiMagnify} size={1} className="searchIcon" />
                                        <input type="text" placeholder="Pesquisar" className="searchInput" />
                                    </div>

                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <p>Tales Henrique</p>
                                                <p>27 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Icon path={mdiDotsVertical} size={0.5} className="icon-signal" />
                                        </div>
                                    </div>
                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="https://randomuser.me/api/portraits/women/95.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <p>Maria Fernanda</p>
                                                <p>5 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button>Cancelar</button>
                                        </div>
                                    </div>
                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="https://randomuser.me/api/portraits/women/5.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <p>Fernanda</p>
                                                <p>8 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Icon path={mdiDotsVertical} size={0.5} className="icon-signal" />
                                        </div>
                                    </div>
                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/5.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <p>Eduardo Henrique</p>
                                                <p>0 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button style={{ backgroundColor: headerColor, border: 'none', borderRadius: '8px', padding: '8px' }}>Adicionar</button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenTwoStore;
