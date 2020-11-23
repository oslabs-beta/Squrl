import React from 'react';
import ReactDom from 'react-dom';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Styles
import './Styles/App.scss'

//components -- when exporting solo component you need brackets
import SideNav from './components/SideNav';
import Home from './testPages/home';
import About from './testPages/About';
import Settings from './testPages/settings';
import dataViz from './testPages/dataViz';
import Generator from './components/generator'
import DataGenPage from './components/DataGenPage';

//div we will append REACT components too
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);



const App: React.FC = () => {
    return (
        <>
            {/* router allows single page application look multipage */}
            <Router>
                {/* constant component for sidebar icons */}
                <SideNav />
                {/* holds multiple components waiting for path to new page */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/dataGen' component={Generator} />
                    <Route path='/dataViz' component={dataViz} />
                    <Route path='/About' component={About} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/dataPage' component={DataGenPage} />
                </Switch>
            </Router>
        </>
    )
}

// renders react Parent component to html 
ReactDom.render(<App />, mainElement)
