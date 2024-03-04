import React from 'react';
import './screenOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


function ScreenOne({ loginFile, text00 }) {
    return (
        <div className="screen-one">

            <div className="header">

            </div>
            <div className="mockup">
                <div className="phone-frame">
                    <div className="screen-content">
                        <div className="splashContent">
                            
                                <img className='previewLoginFile' src={loginFile} alt='tela de login'></img>
                            
                        </div>

                        <div className="loginContent">
                            
                                <div>
                                    <h5> Faça seu login</h5>
                                </div>
                                <div>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                        <input type="text" placeholder="Digite seu email" />
                                    </div>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faLock} className="icon" />
                                        <input type="password" placeholder="Digite sua senha" />
                                    </div>
                                </div>
                                <div>
                                    <input type='checkbox' />Aceite nossos <u>Termos e Condições</u> e nossa <u>Politica de Privacidade</u>
                                </div>
                                <div className="button-container">
                                    <button className="loginButton" > Fazer login </button>
                                </div>
                                <div className="buttonAccount">
                                    <p> Crie uma conta </p>
                                    <p> Esqueceu a senha?  </p>
                                </div>
                                <div>

                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ScreenOne;
