import React from 'react';
import ReactDom from 'react-dom';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Styles
import './Styles/App.scss'

//components -- when exporting solo component you need brackets
import SideNav from './components/SideNav';
import Home from './pageContainers/Home';
import About from './pageContainers/About';
import Settings from './pageContainers/Settings';
import DataVisualization from './pageContainers/DataVisualization';
import DataGeneration from './pageContainers/DataGeneration';

//div we will append REACT components too
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);


/*
App component utilizes router to render the different routes when the
corresponding menu tab is selected. SideNav is always displated since it
is outside of the switch tag. 
*/
const App: React.FC = () => {
    return (
        <>
            <Router>
                <SideNav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/DataGeneration' component={DataGeneration} />
                    <Route path='/DataVisualization' component={DataVisualization} />
                    <Route path='/About' component={About} />
                    <Route path='/Settings' component={Settings} />
                </Switch>
            </Router>
        </>
    )
}

// renders react Parent component to html 
ReactDom.render(<App />, mainElement)
