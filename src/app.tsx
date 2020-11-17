import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/main'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () =>{
    return (
        <div>
            <h1>
                Test Message!
            </h1>
            <Main />
        </div>
    )
}

ReactDom.render(<App />, mainElement)
