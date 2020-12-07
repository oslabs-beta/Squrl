import React from "react";
import Graph from '../../assets/graph.svg';
import Database from '../../assets/database.svg';
import Squrl from '../../assets/squrl.svg';
import Github from '../../assets/github.svg';

//array that holds the icons in sidebar
export const SideNavTabs = [
  {
    title: "Home",
    path: "/",
    icon: <img src={Squrl} alt='Squrl Icon' />,
    cName: "nav-text",
  },
  {
    title: "Data Generation",
    path: "/DataGeneration",
    icon: <img src={Database} alt='Database Icon' />,
    cName: "nav-text",
  },
  {
    title: "Data Visualization",
    path: "/DataVisualization",
    icon: <img src={Graph} alt='Graph Icon' />,
    cName: "nav-text",
  },
  {
    title: "About The Team",
    path: "/About",
    icon: <img src={Github} alt='Github Icon' />,
    cName: "nav-text",
  }
];
