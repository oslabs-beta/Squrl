"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
//react-router-dom
const react_router_dom_1 = require("react-router-dom");
//Styles
require("./Styles/main.scss");
//components -- when exporting solo component you need brackets
const SideNav_1 = __importDefault(require("./pageContainers/SideNav"));
const TopNav_1 = __importDefault(require("./pageContainers/TopNav"));
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
    const [tableStateData, setTableStateData] = react_1.useState({});
    const [tableRow, setTableRow] = react_1.useState([]);
    //     const [tableStateData, setTableStateData] = useState<tableType>(
    //   {'test1':
    //     [
    //       {
    //         columnName: 'test',
    //         category: 'test',
    //         subcategory: 'test',
    //         percent: 'test',
    //         sampleData : 'test',
    //       },
    //       {
    //         columnName: 'test2',
    //         category: 'test2',
    //         subcategory: 'test2',
    //         percent: 'test2',
    //         sampleData : 'test2',
    //       },
    //       {
    //         columnName: 'test3',
    //         category: 'test3',
    //         subcategory: 'test3',
    //         percent: 'test3',
    //         sampleData : 'test3',
    //       }
    //     ],
    //     'test2':
    //     [
    //       {
    //         columnName: 'test',
    //         category: 'test',
    //         subcategory: 'test',
    //         percent: 'test',
    //         sampleData : 'test',
    //       },
    //       {
    //         columnName: 'test2',
    //         category: 'test2',
    //         subcategory: 'test2',
    //         percent: 'test2',
    //         sampleData : 'test2',
    //       },
    //       {
    //         columnName: 'test3',
    //         category: 'test3',
    //         subcategory: 'test3',
    //         percent: 'test3',
    //         sampleData : 'test3',
    //       }
    //     ]
    //   }
    // )
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(TopNav_1.default, null),
            react_1.default.createElement(SideNav_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/DataGeneration', component: () => (react_1.default.createElement(DataGeneration_1.default, { tableStateData: tableStateData, setTableStateData: setTableStateData, tableRow: tableRow, setTableRow: setTableRow })) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/DataVisualization', component: DataVisualization_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/About', component: About_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: '/Settings', component: Settings_1.default })))));
};
// renders react Parent component to html 
react_dom_1.default.render(react_1.default.createElement(App, null), mainElement);
//# sourceMappingURL=app.js.map