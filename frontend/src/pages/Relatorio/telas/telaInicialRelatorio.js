import React from 'react';
import './telaInicialRelatorio.css';
// Importe outras imagens conforme necessário
import TelaLogin from '../../../components/telaLogin';
import TelaSplash from '../../../components/telaSplash';
import TelaLojaApp from '../../../components/telaLojaApp';
import TelaTimeline from '../../../components/TelaTimeline';
import TelaPerfil from '../../../components/telaPerfil';
import TelaAgenda from '../../../components/telaAgenda';
import TelaNotificacao from '../../../components/telaNotificacao';

const TelaInicialRelatorio = ({ loginFile, primaryColor, splash, headerColor, logoTimeline, secondaryColor, text00, bannerStoreIcon, storeIcon, textColor, isLightMode }) => {


    return (
        <div className="template-selection-modal">
            <div className="background-overlay">
                <div className="background-mockup" />
            </div>

            <div className="titleScreen">
                <div className='titles' >
                    <img src="https://www.yazo.com.br/wp-content/uploads/2021/04/cropped-lett_color.png" alt="Yazo Logo" className="yazo-logo" />

                    <h2>Estratégias Yazo para o seu evento</h2>
                </div>
                <div className="mockup-gallery-container">
                    {/* Fundo com blur */}
                    <div className="mockup-gallery-background">
                        <div className="mockup-gallery">
                            <div>
                                <div className="screen">
                                    <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                                </div>
                                <div className="screen">
                                    <TelaSplash splash={splash} />
                                </div>
                            </div>
                            <div>
                                <div className="screen">
                                    <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                                </div>
                                <div className="screen">
                                    <TelaLojaApp storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                                </div>
                                <div className="screen">
                                    <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                                </div>
                            </div>
                            <div>
                                <div className="screen">
                                    <TelaSplash splash={splash} />
                                </div>
                                <div className="screen">
                                    <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Galeria principal */}
                    <div className="mockup-gallery">
                        <div>
                            <div className="screen">
                                <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                            </div>
                            <div className="screen">
                                <TelaSplash splash={splash} />
                            </div>
                        </div>
                        <div>
                            <div className="screen">
                                <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                            </div>
                            <div className="screen">
                                <TelaLojaApp storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                            </div>
                            <div className="screen">
                                <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                            </div>
                        </div>
                        <div>
                            <div className="screen">
                                <TelaSplash splash={splash} />
                            </div>
                            <div className="screen">
                                <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TelaInicialRelatorio;
