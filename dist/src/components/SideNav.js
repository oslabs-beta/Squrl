"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const SideNavTabs_1 = require("./SideNavTabs");
require("../Styles/SideNavStyles.scss");
const react_icons_1 = require("react-icons");
const SideNav = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_icons_1.IconContext.Provider, { value: { color: '3F7D20', size: '26px' } },
            react_1.default.createElement("nav", { className: 'side-nav-active' },
                react_1.default.createElement("ul", { className: 'nav-menu-items' }, SideNavTabs_1.SideNavTabs.map((tab, index) => (react_1.default.createElement("li", { key: index, className: tab.cName, title: tab.title },
                    react_1.default.createElement(react_router_dom_1.Link, { to: tab.path }, tab.icon)))))))));
};
exports.default = SideNav;
//# sourceMappingURL=SideNav.js.map