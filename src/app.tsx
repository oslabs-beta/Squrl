import React from 'react';
import ReactDom from 'react-dom';
//react-router-dom
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Styles
import './Styles/App.scss'

//components
import SideNav from './components/SideNav';
import Home from './testPages/home';
import { About } from './testPages/About';
import { Settings } from './testPages/settings';
import { dataViz } from './testPages/dataViz';
import Generator from './components/generator'


const mainElement = document.createElement('div');
document.body.appendChild(mainElement);



const App: React.FC = () => {
    return (
        <>
            <Router>
                <SideNav/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/dataGen' component={Generator} />
                    <Route path='/dataViz' component={dataViz}  />
                    <Route path='/About' component={About} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </Router>
        </>
    )
}

ReactDom.render(<App />, mainElement)
