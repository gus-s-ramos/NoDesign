import React, { useState, useRef } from 'react';
import './relatorio.css';
import TelaLogin from '../../components/telaLogin';
import TelaSplash from '../../components/telaSplash';
import TelaLojaApp from '../../components/telaLojaApp';
import TelaTimeline from '../../components/TelaTimeline';
import LoadingScreen from '../loadingScreen';
import TelaPerfil from '../../components/telaPerfil';
import TelaAgenda from '../../components/telaAgenda';
import TelaNotificacao from '../../components/telaNotificacao';
import TelaTicketAereo from '../../components/telaTicketAereo';
import TelaAreaDeNetworking from '../../components/telaAreaDeNetworking';
import TelaPatrocinadores from '../../components/telaPatrocinadores';

function Relatorio() {
    const [splash, setSplash] = useState('https://placehold.co/360x777');
    const [loginFile, setLoginFile] = useState('https://placehold.co/1900x1500');
    const [logoTimeline, setLogoTimeline] = useState('https://placehold.co/254x128');
    const [storeIcon, setStoreIcon] = useState('https://placehold.co/128x128');
    const [bannerStoreIcon, setBannerStoreIcon] = useState('https://placehold.co/621x1344');
    const [bannerStoreIcon01, setBannerStoreIcon01] = useState('https://placehold.co/621x1344');
    const [primaryColor, setPrimaryColor] = useState('#821938');
    const [secondaryColor, setSecondaryColor] = useState('#f1f1f1');
    const [headerColor, setHeaderColor] = useState('#ffa00c');
    const [text00, setText00] = useState('NOME DO APLICATIVO');
    const [isLightMode, setIsLightMode] = useState(true);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [textColor, setTextColor] = useState('#000');






    return (
        <div>
            {isLoading && <LoadingScreen />}

            <div className="containerLayout">
                
                <div className='divScreenContent'>
                    <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />,
                    <TelaSplash splash={splash} />,
                    <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />,
                    <TelaLojaApp storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />,
                    <TelaPerfil primaryColor={primaryColor}/>
                    <TelaAgenda primaryColor={primaryColor}/>
                    <TelaNotificacao primaryColor={primaryColor} />
                    <TelaTicketAereo primaryColor={primaryColor} />
                    <TelaAreaDeNetworking primaryColor={primaryColor} />
                    <TelaPatrocinadores primaryColor={primaryColor} />

                </div>
                
            </div>


        </div>
    );
}

export default Relatorio;


