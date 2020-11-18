import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as Vscicons from 'react-icons/vsc';
//GiAcorn

export const SideNavTabs = [
  {
    title: 'Home',
    path: '/',
    icon: <Vscicons.VscSquirrel />,
    cName: 'nav-text'
  },
  {
    title: 'DataGen',
    path: '/dataGen',
    icon: <GiIcons.GiAcorn />,
    cName: 'nav-text'
  },
  //AiOutlinePieChart
  {
    title: 'DataViz',
    path: '/dataViz',
    icon: <AiIcons.AiOutlinePieChart />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <GiIcons.GiLeafSwirl />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <GiIcons.GiLeafSwirl />,
    cName: 'nav-text'
  },
]
