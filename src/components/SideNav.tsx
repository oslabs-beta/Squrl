import React, { useState } from 'react';
import * as Icons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SideNavTabs } from './SideNavTabs'
import '../Styles/SideNavStyles.scss'
import { IconContext } from 'react-icons'



const SideNav: React.FC = () => {
<<<<<<< HEAD
  const [visible, setVisible] = useState<boolean>(false)

  //toggle between showing sidenav by alternating [visible] in state  between true or false
  const showSideNav = () => {
    setVisible(!visible)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '3F7D20' }} >
        <div className='side-nav' onClick={showSideNav} >
          <Link to='#' className='menu-bar'>
            <Icons.FaBars />
          </Link>
        </div>
        <nav className={visible ? 'side-nav active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='side-nav-toggle' onClick={showSideNav} >
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideNavTabs.map((tab, index) => (
              <li key={index} className={tab.cName}>
                <Link to={tab.path}>
                  {tab.icon}
                  <span>{tab.title}</span>
=======
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
>>>>>>> e8d1a750a82ff9050cd8ba7873e7368cffb55049
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


