import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaAreaDeNetworking = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <h6>Área de Networking</h6>
                                </div>
                                <div className="labelmenu01">
                                    <Icon path={mdiTuneVertical} size={0.5} className="icon-signal" />
                                </div>
                            </div>
                            <div>
                                <button style={{ color: '#000', margin: '10px 10px 10px 10px', border: 'none', borderBottom: `2px solid ${primaryColor}` }}>Todos</button>
                                <button style={{ color: '#000', border: 'none', borderBottom: `2px solid #fff` }}>Contatos</button>
                                <button style={{ color: '#000', border: 'none', borderBottom: `2px solid #fff` }}>Pendentes</button>
                            </div>

                            <div>
                                <div className="searchBar">
                                    <Icon path={mdiMagnify} size={0.7} className="searchIcon" />
                                    <input type="text" placeholder="Pesquisar" className="searchInput" />
                                </div>
                            </div>
                            <div>

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
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor, }}>Adicionar</button>
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
                                                src="/assets/9 (1).jpg"
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
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/4.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div>
                                            <h6>Douglas Silva</h6>
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
})

export default TelaAreaDeNetworking;
