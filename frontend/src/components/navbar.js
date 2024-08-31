import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiArrowDownDropCircleOutline,
  mdiDoorOpen,
  mdiAccountCircle,
  mdiBell,
  mdiChat,
  mdiMagnify,
  mdiArrowLeft,
  mdiArrowRight,
  mdiWeatherSunny,
  mdiWeatherNight,
} from '@mdi/js';
import './navbar.css';

const Navbar = () => {
  const [lightMode, setLightMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleModeChange = (event) => {
    setLightMode(event.target.checked);
    document.body.className = event.target.checked ?  'dark-mode':'light-mode';
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBackClick = () => {
    window.history.back();
  };
  const handleForwardClick = () => {
    window.history.forward();
  };
  

  return (
    <div className="navbar">
      <div className="top-menu">
        <div className="logo">
          <Link to="/">
            <img src="https://www.yazo.com.br/wp-content/uploads/2021/04/cropped-lett_color.png" alt="Logo" />
          </Link>

        </div>
        <div onClick={handleBackClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'flex-start', }}>
          <Icon style={{  borderRadius: '50%', padding: '5px' }} path={mdiArrowLeft} size={0.8} />
        </div>
        <div onClick={handleForwardClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'flex-start', }}>
          <Icon style={{ borderRadius: '50%', padding: '5px' }} path={mdiArrowRight} size={0.8} />
        </div>

        <div className="search-bar">
          {/*<input type="text" placeholder="Search..." />
          <button type="submit">
            <Icon path={mdiMagnify} size={1} className="icon-white" />
  </button>*/}
        </div>
        <div className="notifications">
          {/*<button aria-label="Notifications">
            <Icon color='white' path={mdiBell} size={1} className="icon-white" />
          </button>
          <button aria-label="Chat">
            <Icon color='white' path={mdiChat} size={1} className="icon-white" />
          </button>*/}
          <label className="switch">
            <Icon path={mdiWeatherSunny} size={0.6} />
            <input type="checkbox" checked={lightMode} onChange={handleModeChange} />
            <span className="slider round"></span>
            <Icon path={mdiWeatherNight} size={0.6} />
          </label>
        </div>

        <div className="user-profile">
          {/*<div className="dropdown">
            <button onClick={handleDropdownToggle} aria-haspopup="true" aria-expanded={isDropdownOpen}>
              <Icon color='white' path={mdiArrowDownDropCircleOutline} size={1} className="icon-white" />
            </button>
            {isDropdownOpen && (
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <ul>
                  <li>
                    <Link to="/profile">
                      <Icon path={mdiAccountCircle} size={1} className="icon-white" /> Editar perfil
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout">
                      <Icon  path={mdiDoorOpen} size={1} className="icon-white" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/profile">
            <img className="user-photo" src="https://i.imgur.com/7J9JdOh.png" alt="User" />
          </Link>
            */}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
