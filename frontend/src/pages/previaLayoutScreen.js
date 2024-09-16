import React from 'react';
import './previaLayoutScreen.css';
import ScreenStoreAndroid from '../components/screenStoreAndroid';
import ScreenOneIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenOneIphone65';
import ScreenTwoIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenTwoIphone65';
import ScreenThreeIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenThreeIphone65';
import ScreenFourIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenFourIphone65';
import ScreenStoreIos from '../components/screenStoreIos';

const PreviaLayout = ({
    textColor,
    loginFile,
    headerColor,
    primaryColor,
    isLightMode,
    logoTimeline,
    splash,
    storeIcon,
    bannerStoreIcon,
    text00,
    secondaryColor
}) => {
    return (
        <div id='tela-layout' className="containerPreviaLayout">
            <div className='TituloPrevia'>
                <p>APP NO AR</p>
                <div className='linhaGuiaTitulo' style={{backgroundColor:primaryColor }}></div>
            </div>
            <div className='PreviaGrid'>
                <div className='PreviaGrid01'>
                    <h1>Publicação nas Lojas</h1>
                    <p>
                        O Aplicativo white label Yazo será personalizado com a identidade visual do seu Evento e
                        disponível para IOS e Android. Este documento apresenta o que você precisa aprovar para a
                        publicação do aplicativo nas lojas - App Store (Apple) e Play Store (Google).
                    </p>
                </div>

                <section className="store-approval">
                    <div className="store">
                        <ScreenStoreIos storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                        <h2>PLAY STORE</h2>
                    </div>
                    <div className="store">
                        <ScreenStoreAndroid storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                        <h2>APP STORE</h2>
                    </div>

                    <div className="app-name">
                        <p>Nome do aplicativo: <strong> {text00} </strong></p>
                        <div className='iconAppPreview'>
                            <img src={storeIcon} alt="App Icon" className="app-icon" />
                            <p>Ícone</p>
                        </div>
                        <div className='iconAppPreview'>
                            <button
                                style={{
                                    width: "60px",
                                    height: "60px",
                                    backgroundColor: primaryColor,
                                    cursor: "pointer",
                                    borderRadius: "10px",
                                    margin: "10px 10px 10px 0px",
                                    border: "none",

                                }}
                            />
                            <p>Cor primária: <strong>{primaryColor}</strong></p>
                        </div>
                    </div>
                </section>

                <section className="app-details">

                </section>

                <section>
                    <div className='PreviaGrid01'>
                        <h1>Prints de Funcionalidades:</h1>
                        <p>
                            Os prints das funcionalidades estão de acordo com as diretrizes das lojas, sendo padrão de
                            publicação, não sendo recomendável nenhuma alteração.
                        </p>
                    </div>
                    <div className='screenPrintStore'>
                        <div className="screenshots-grid">
                            <ScreenOneIphone65
                                textColor={textColor}
                                loginFile={loginFile}
                                headerColor={headerColor}
                                primaryColor={primaryColor}
                                isLightMode={isLightMode}
                                logoTimeline={logoTimeline}
                                secondaryColor={secondaryColor}
                            />
                        </div>
                        <div className="screenshots-grid">
                            <ScreenTwoIphone65
                                textColor={textColor}
                                primaryColor={primaryColor}
                                splash={splash}
                                headerColor={headerColor}
                                logoTimeline={logoTimeline}
                                secondaryColor={secondaryColor}
                            />
                        </div>
                        <div className="screenshots-grid">
                            <ScreenThreeIphone65
                                textColor={textColor}
                                primaryColor={primaryColor}
                                storeIcon={storeIcon}
                                secondaryColor={secondaryColor}
                                logoTimeline={logoTimeline}
                                bannerStoreIcon={bannerStoreIcon}
                                text00={text00}
                                headerColor={headerColor}
                            />
                        </div>
                        <div className="screenshots-grid">
                            <ScreenFourIphone65
                                textColor={textColor}
                                loginFile={loginFile}
                                primaryColor={primaryColor}
                                isLightMode={isLightMode}
                                logoTimeline={logoTimeline}
                                secondaryColor={secondaryColor}
                            />
                        </div>
                    </div>
                </section>

                <footer className="important-info">
                    <p>
                        <strong>Informações importantes:</strong> Após a aprovação da prévia e o App publicado,
                        alterações de nome do app, ícone, e print de funcionalidades solicitadas terão o investimento
                        de R$3.000,00 (três mil reais)/cada, referente a atualização e republicação do aplicativo
                        nas lojas.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default PreviaLayout;
