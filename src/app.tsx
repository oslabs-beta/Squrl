import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios'
//react-router-dom
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//Styles
import './Styles/main.scss'

//components -- when exporting solo component you need brackets
import SideNav from './pageContainers/SideNav';
import TopNav from './pageContainers/TopNav';
import Home from './pageContainers/Home';
import About from './pageContainers/About';
import DataVisualization from './pageContainers/DataVisualization';
import DataGeneration from './pageContainers/DataGeneration';
import Percentages from '../src/components/DataVisualizationChildren/Percentages'
//div we will append REACT components too
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);


//DOES THIS NEED TO BE HERE?
export type inputObj = {
  columnName: string;
  category: string;
  subcategory: string;
  percent: string;
  sampleData: string;
}

//The state type will be an array of inputObj that was defined above 
export type tableStateData = inputObj[];


export type tableType = {
  [key: string]: tableStateData
}

const bytes = require('bytes');
const randomColor = require('randomcolor')

/*
App component utilizes router to render the different routes when the
corresponding menu tab is selected. SideNav is always displated since it
is outside of the switch tag. 
*/
const App: React.FC = () => {
  const [tableStateData, setTableStateData] = useState<tableType>({})
  const [tableRow, setTableRow] = useState<number[]>([]);
  // const [tableStateData, setTableStateData] = useState<tableType>(
  //   {
  //     'test1':
  //       [
  //         {
  //           columnName: 'test',
  //           category: 'test',
  //           subcategory: 'test',
  //           percent: 'test',
  //           sampleData: 'test',
  //         },
  //         {
  //           columnName: 'test2',
  //           category: 'test2',
  //           subcategory: 'test2',
  //           percent: 'test2',
  //           sampleData: 'test2',
  //         },
  //         {
  //           columnName: 'test3',
  //           category: 'test3',
  //           subcategory: 'test3',
  //           percent: 'test3',
  //           sampleData: 'test3',
  //         }
  //       ],
  //     'test2':
  //       [
  //         {
  //           columnName: 'test',
  //           category: 'test',
  //           subcategory: 'test',
  //           percent: 'test',
  //           sampleData: 'test',
  //         },
  //         {
  //           columnName: 'test2',
  //           category: 'test2',
  //           subcategory: 'test2',
  //           percent: 'test2',
  //           sampleData: 'test2',
  //         },
  //         {
  //           columnName: 'test3',
  //           category: 'test3',
  //           subcategory: 'test3',
  //           percent: 'test3',
  //           sampleData: 'test3',
  //         }
  //       ]
  //   }
  // )
  return (
    <div className="app-container">

      <Router>
        <TopNav />
        <SideNav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/DataGeneration' component={DataGeneration} />
          <Route path='/DataGeneration' component={() => (
            <DataGeneration
              tableStateData={tableStateData}
              setTableStateData={setTableStateData}
              tableRow={tableRow}
              setTableRow={setTableRow}
            />
          )} />
          <Route path='/DataVisualization' component={() => {
            return <DataVisualization />
          }} />
          <Route path='/About' component={About} />
        </Switch>
      </Router>
    </div>
  )
}

// renders react Parent component to html 
ReactDom.render(<App />, mainElement)
