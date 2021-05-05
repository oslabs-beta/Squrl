import React from 'react';
import { Link } from 'react-router-dom'
import { SideNavTabs } from '../components/SideNavTabs'

const SideNav: React.FC = () => {
  return (
    <div className='side-nav-container'>
      <nav className='side-nav-bar'>
        <ul className='nav-tab-items'>
          {/* loops over side nav object and creates li element for each object */}
          {SideNavTabs.map((tab, index) => (
            <li key={index} title={tab.title}>
              <Link to={tab.path}>
                {tab.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;


