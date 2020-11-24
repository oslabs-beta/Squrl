import React from 'react';
import { Link } from 'react-router-dom'
import { SideNavTabs } from './SideNavTabs'
import '../Styles/SideNavStyles.scss'
import { IconContext } from 'react-icons'



const SideNav: React.FC = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '3F7D20', size: '26px' }} >
        <nav className='side-nav-active'>
          <ul className='nav-menu-items' >
            {/* loops through SideNavTab array holding tab info --> creates li w/ link to new page via Router */}
            {SideNavTabs.map((tab, index) => (
              <li key={index} className={tab.cName} title={tab.title}>
                <Link to={tab.path}>
                  {/* component that holds icon */}
                  {tab.icon}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;


