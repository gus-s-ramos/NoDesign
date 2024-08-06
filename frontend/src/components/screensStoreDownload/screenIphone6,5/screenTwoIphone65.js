import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';
import './screenIphone65.css'



function ScreenTwoIphone65({ primaryColor, secondaryColor, logoTimeline, headerColor }) {

    return (
        <div id="screen-two-iphone-65" className="storeIphone" style={{ backgroundColor: secondaryColor, }}>
            <img
                src={logoTimeline}
                className="logoTimelinesHeader"
                style={{ width: '100px', height: '58px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
            />
            <h5>Tenha contato com os <br></br> outros participantes!</h5>
            <div>
                <div className="screenIphone" style={{ marginTop: '40px' }}>
                    <div className="timelineContentBig">
                        <div className="screenfourbig">
                            <div className="menuNotchStoreOne" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.6} className="icon-signal" />
                                    <Icon path={mdiWifi} size={0.6} className="icon-wifi" />
                                    <Icon path={mdiBattery} size={0.6} className="icon-battery" />
                                </div>

                            </div>
                            <div className="labelmenu">
                                <div className="labelmenu01">
                                    <Icon path={mdiChevronLeft} size={0.6} className="icon-signal" />
                                    <h7>Área de networking</h7>
                                </div>
                                <div className="labelmenu01">

                                    <Icon path={mdiTuneVertical} size={0.6} className="icon-signal" />
                                </div>
                            </div>
                            <div className='networkingButton'>
                                <button className='buttonprimary' style={{ borderBottom: `2px solid ${primaryColor}` }}>Todos</button>
                                <button className='buttonsecundary'>Contatos</button>
                                <button className='buttonsecundary'>Pendentes</button>
                            </div>
                            <div>
                                <div className="searchBar">
                                    <div type="text" className="searchInputBig">
                                        <Icon path={mdiMagnify} size={0.7} className="icon-signal" />
                                        <p>Pesquisar</p>
                                    </div>
                                </div>

                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/1.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Tales Henrique</h6>
                                            <p>27 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" />
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/95.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
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
                                        <div >
                                            <img
                                                src="/assets/5 (1).jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Fernanda Sofia</h6>
                                            <p>8 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" />
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/5.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Eduardo Henrique</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/9.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Fabio Cabral</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/48.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Pietra Canvan</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" />
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/6.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Paula Canvan</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/54.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div>
                                            <h6>Pietra Canvan</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" />
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/6.jpg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div>
                                            <h6>Pietra Canvan</h6>
                                            <p>0 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" />
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

export default ScreenTwoIphone65;
