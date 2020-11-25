import React from 'react';
import { Link } from 'react-router-dom'
import { SideNavTabs } from '../components/SideNavTabs'
import { IconContext } from 'react-icons'



const SideNav: React.FC = () => {
  return (
    <div className='side-nav-container'>
      <IconContext.Provider value={{ color: '3F7D20', size: '26px' }} >
        <nav className='side-nav-bar'>
          <ul className='nav-tab-items'>
            {SideNavTabs.map((tab, index) => (
              <li key={index} className={tab.cName} title={tab.title}>
                <Link to={tab.path}>
                  {tab.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SideNav;


