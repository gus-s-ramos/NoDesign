import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';
import './screenIphone65.css'



function ScreenTwoIphone65({ primaryColor, secondaryColor, logoTimeline, headerColor, textColor }) {

    return (
        <div id="screen-two-iphone-65" className="storeIphone" style={{ backgroundColor: secondaryColor, }}>
            <img
                src={logoTimeline}
                className="logoTimelinesHeader"
                style={{ width: '100px', height: '58px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
            />
            <h5 style={{ color: textColor }}>Tenha contato com os <br></br> outros participantes!</h5>
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
                                                src="/assets/foto03.jpeg"
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
                                                src="/assets/foto04.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Sandra Dias</h6>
                                            <p>9 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div >
                                            <img
                                                src="/assets/foto05.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Rodrigo Silva</h6>
                                            <p>30 amigos em comum</p>
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
                                                src="/assets/foto06.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Mônica Mathias</h6>
                                            <p>15 amigos em comum</p>
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
                                                src="/assets/foto11.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Rogério Antunes</h6>
                                            <p>30 amigos em comum</p>
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
                                                src="/assets/foto10.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '40px', height: '40px', borderRadius: '8px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Vanessa Machado</h6>
                                            <p>9 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
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
