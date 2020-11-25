"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
//react-router-dom
const react_router_dom_1 = require("react-router-dom");
//Styles
require("./Styles/main.scss");
//components -- when exporting solo component you need brackets
const SideNav_1 = __importDefault(require("./components/SideNav"));
const Home_1 = __importDefault(require("./pageContainers/Home"));
const About_1 = __importDefault(require("./pageContainers/About"));
const Settings_1 = __importDefault(require("./pageContainers/Settings"));
const DataVisualization_1 = __importDefault(require("./pageContainers/DataVisualization"));
const DataGeneration_1 = __importDefault(require("./pageContainers/DataGeneration"));
//div we will append REACT components too
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
/*
App component utilizes router to render the different routes when the
corresponding menu tab is selected. SideNav is always displated since it
is outside of the switch tag.
*/
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SideNav_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/DataGeneration', component: DataGeneration_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/DataVisualization', component: DataVisualization_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/About', component: About_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/Settings', component: Settings_1.default })))));
};
// renders react Parent component to html 
react_dom_1.default.render(react_1.default.createElement(App, null), mainElement);
//# sourceMappingURL=app.js.map