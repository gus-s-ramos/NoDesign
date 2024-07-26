import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';
import './screenTwoStore.css';



function ScreenTwoStoreDownload({ secondaryColor, logoTimeline, headerColor }) {
    
    return (
            <div id="screen-two-store-content" className="storePrint" style={{ backgroundColor: secondaryColor, }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '84px', height: '42px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <h5>Tenha contato com os <br></br> outros participantes!</h5>
                <div>
                    <div className="screenStore" style={{ marginTop: '40px' }}>
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
                                        <h7>Área de networking</h7>
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
                                        <Icon path={mdiMagnify} size={0.7} className="searchIcon" />
                                        <input type="text" placeholder="Pesquisar" className="searchInput" />
                                    </div>

                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="/assets/1.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Tales Henrique</h6>
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
                                                    src="/assets/95.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Maria Fernanda</h6>
                                                <p>5 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='buttonNetworking'>Cancelar</button>
                                        </div>
                                    </div>
                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="/assets/5 (1).jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Fernanda Sofia</h6>
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
                                                    src="/assets/5.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Eduardo Henrique</h6>
                                                <p>0 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='buttonNetworking01' style={{ backgroundColor: headerColor}}>Adicionar</button>
                                        </div>
                                    </div>
                                    <div className="userLabel">
                                        <div className="userLabel01">
                                            <div>
                                                <img
                                                    src="/assets/9.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Fabio Cabral</h6>
                                                <p>0 amigos em comum</p>
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
                                                    src="/assets/9.jpg"
                                                    alt="Foto do Usuário"
                                                    style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                                />
                                            </div>
                                            <div>
                                                <h6>Pietra Canvan</h6>
                                                <p>0 amigos em comum</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Icon path={mdiDotsVertical} size={0.5} className="icon-signal" />
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

export default ScreenTwoStoreDownload;
