import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiGamepadVariant, mdiSignature, mdiSignatureImage } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';
import { mdiMonitorCellphone } from '@mdi/js';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';
import { mdiDoorOpen } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';

import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
      <div className="itensnavbar">
        <div className="navTitle">
          <p>SEU HUB</p>
          <p>Yazo</p>
        </div>
        <div className="navButtons">
          <ul>
            <li>
              <a href="/gamification">
                <Icon path={mdiGamepadVariant} size={1} />
              </a>
            </li>
            <li>
              <a href="/report">
                <Icon path={mdiChartLine} size={1} />
              </a>
            </li>
            <li>
              <a href="/layout">
                <Icon path={mdiMonitorCellphone} size={1} />
              </a>
            </li>
            <li>
              <a href="/signature">
                <Icon path={mdiSignatureImage} size={1} />
              </a>
            </li>
          </ul>
        </div>
        <div className="contCliente">
          <div><p> Gustavo Ramos</p></div>
          <div className="navClient">

            <div className="user-button">

              <img
                className="user-photo"
                src="https://i.imgur.com/7J9JdOh.png"
                alt="User"
              />

            </div>
          </div>
          <div className="dropdown">
            <button onClick={handleDropdownToggle}>
              <Icon path={mdiArrowDownDropCircleOutline} size={1} />
            </button> {isDropdownOpen && (
            
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <ul>
                <button>
                  <Icon path={mdiAccountCircle} size={1} /> Editar perfil
                </button>
                <button>
                  <Icon path={mdiDoorOpen} size={1} /> Logout
                </button>
              </ul>
            </div>)}
          </div>
        
      </div>
    </div>
    </div >
  );
};

export default Navbar;