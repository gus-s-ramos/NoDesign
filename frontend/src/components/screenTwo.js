import React from 'react';
import './screenTwo.css';


function ScreenTwo({ splash }) {
    return (
        <div className="screen-one">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="splash-content">
                    <img src={splash} alt='tela de splash'></img>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ScreenTwo;
