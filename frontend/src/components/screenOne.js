import React from 'react';
import './screenOne.css';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';

function ScreenOne({ loginFile, primaryColor, isLightMode }) {
    return (
        <div className="screen-one">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="screen-content">
                        <div className="splashContent">
                            <img className='previewLoginFile' src={loginFile} alt='tela de login' />
                        </div>
                        <div className="loginContent" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                            <div>
                                <h5> Faça o login</h5>
                            </div>
                            <div>
                                <div className="input-wrapper">
                                    <Icon path={mdiEmailOutline} size={0.7} className="icon" />
                                    <input className='inputMockup' type="text" placeholder="Email" />
                                </div>
                                <div className="input-wrapper">
                                    <Icon path={mdiLockOutline} size={0.7} className="icon" />
                                    <input className='inputMockup' type="password" placeholder="Digite a senha" />
                                </div>
                            </div>
                            <div className="termos-privacidade">
                                <input type='checkbox' />
                                <p><u>Aceite os termos e condições e política de privacidade</u></p>
                            </div>
                            <div className="button-container">
                                <button className="loginButton" style={{ backgroundColor: primaryColor }}> Fazer login </button>
                            </div>
                            <div className="buttonAccount">
                                <p> Crie uma conta </p>
                                <p> Esqueceu a senha? </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenOne;
