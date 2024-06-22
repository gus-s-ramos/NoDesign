import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiArrowDownDropCircleOutline,
  mdiDoorOpen,
  mdiAccountCircle,
  mdiBell,
  mdiChat,
  mdiMagnify
} from '@mdi/js';
import './navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="top-menu">
        <div className="logo">
          <Link to="/">
            <img src="https://www.yazo.com.br/wp-content/uploads/2021/04/cropped-lett_color.png" alt="Logo" />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <Icon path={mdiMagnify} size={1} className="icon-white" />
          </button>
        </div>
        <div className="notifications">
          <button aria-label="Notifications">
            <Icon color='white' path={mdiBell} size={1} className="icon-white" />
          </button>
          <button aria-label="Chat">
            <Icon color='white' path={mdiChat} size={1} className="icon-white" />
          </button>
        </div>
        <div className="user-profile">
          <div className="dropdown">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
