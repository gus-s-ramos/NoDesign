import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiGamepadVariant, mdiChartLine, mdiMonitorCellphone, mdiSignatureImage } from '@mdi/js';
import './menu.css';

const Menu = () => {
  const location = useLocation();
  const menuItems = [
    { to: '/gamification', icon: mdiGamepadVariant },
    { to: '/report', icon: mdiChartLine },
    { to: '/layout', icon: mdiMonitorCellphone },
    { to: '/signature', icon: mdiSignatureImage },
  ];

  const getLinkClass = (path) => {
    return location.pathname === path ? 'menu-item selected' : 'menu-item';
  };

  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={getLinkClass(item.to)}>
            <Link to={item.to}>
              <Icon path={item.icon} size={1} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
