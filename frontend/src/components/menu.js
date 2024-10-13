import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiGamepadVariant, mdiChevronRight, mdiMonitorCellphone, mdiSignatureImage, mdiBellCheckOutline, mdiMenu } from '@mdi/js';
import './menu.css';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const menuItems = [
    { to: '/gamification', icon: mdiGamepadVariant, name: 'Regra Game' },
    { to: '/layout', icon: mdiMonitorCellphone, name: 'Layout' },
    { to: '/assinaturasGrid', icon: mdiSignatureImage, name: 'Assinatura' },
    {/*{ to: '/relatorio', icon: mdiSignatureImage, name: 'Relatorio'*/}
  ];

  const getLinkClass = (path) => {
    return location.pathname.startsWith(path) ? 'menu-item selected' : 'menu-item';
  };

  return (
    <div className={`menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
        <Icon path={isExpanded ? mdiMenu : mdiChevronRight} size={1} />
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={getLinkClass(item.to)}>
            <Link to={item.to} className="menu-link">
              <Icon path={item.icon} size={1} />
              {isExpanded && <span className="menu-name">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
