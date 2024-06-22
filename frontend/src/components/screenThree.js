import React from 'react';
import './screenThree.css';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiMagnify, mdiDotsVertical, mdiStar, mdiDownload, mdiAccountCircle } from '@mdi/js';



function ScreenThree({ storeIcon, text00 }) {
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="splash-content">
                        <div className="screenthree">
                            <div className="menuHeader">
                                <Icon path={mdiArrowLeft} size={1} className="icon-return" />
                                <div>
                                    <Icon path={mdiMagnify} size={1} className="icon-search" />
                                    <Icon path={mdiDotsVertical} size={1} className="icon-options" />
                                </div>
                            </div>
                            <div className="app-info">
                                <img src={storeIcon} alt="App Icon" className="app-icon" />
                                <div className="app-details">
                                    <h3 type="text" >{text00}</h3>
                                    <p>YAZO</p>
                                </div>
                            </div>
                            <div className="app-stats">
                                <div className="app-reviews">
                                    <div className='app-stats-star'>
                                        <p>5.0</p>
                                        <Icon path={mdiStar} size={1} className="icon-star" />
                                    </div>
                                    <span>Avaliações</span>
                                </div>
                                <div className="app-download">
                                    <div className='app-stats-star'>
                                        <p>.</p>
                                        <Icon path={mdiDownload} size={1} className="icon-download" />
                                    </div>
                                    <span>15MB</span>

                                </div>
                                <div className="app-rating">
                                    <div className='app-stats-star'>
                                        <Icon path={mdiAccountCircle} size={1} className="icon-download" />
                                        <p>+12</p>
                                    </div>
                                    <span>Classificação</span>
                                </div>
                            </div>
                            <div className="install-button">
                                <button>Instalar</button>
                            </div>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <img alt="Screenshot 1" />
                                </div>
                                <div className="screenshot">
                                    <img alt="Screenshot 2" />
                                </div>
                                <div className="screenshot">
                                    <img alt="Screenshot 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenThree;
