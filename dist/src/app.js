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
require("./Styles/App.scss");
//components -- when exporting solo component you need brackets
const SideNav_1 = __importDefault(require("./components/SideNav"));
const home_1 = __importDefault(require("./testPages/home"));
const About_1 = __importDefault(require("./testPages/About"));
const settings_1 = __importDefault(require("./testPages/settings"));
const dataViz_1 = __importDefault(require("./testPages/dataViz"));
const generator_1 = __importDefault(require("./components/generator"));
//div we will append REACT components too
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SideNav_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/dataGen', component: generator_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/dataViz', component: dataViz_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/About', component: About_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/settings', component: settings_1.default })))));
};
// renders react Parent component to html 
react_dom_1.default.render(react_1.default.createElement(App, null), mainElement);
//# sourceMappingURL=app.js.map