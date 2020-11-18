import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/main'
import Generator from './components/generator';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () =>{
    return (
        <div>
            <Main />
            <Generator />
        </div>
    )
}

ReactDom.render(<App />, mainElement)
