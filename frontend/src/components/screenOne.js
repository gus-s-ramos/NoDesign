import React from 'react';
import './screenOne.css';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import './screensStoreDownload/screenIphone6,5/screenIphone65.css'

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
                                <div type="text" className="searchInputBig" style={{ marginBottom:"10px", color:"#979797"}}>
                                    <Icon path={mdiEmailOutline} size={0.7} className="icon-signal" style={{marginRight:"5px", color:"#00000070"}} />
                                    <p>Login</p>
                                </div>
                                <div type="text" className="searchInputBig" style={{ marginBottom:"10px", color:"#979797"}}>
                                    <Icon path={mdiLockOutline} size={0.7} className="icon-signal" style={{marginRight:"5px", color:"#00000070"}} />
                                    <p>Senha</p>
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
