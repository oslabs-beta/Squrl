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
exports.SideNavTabs = void 0;
const react_1 = __importDefault(require("react"));
const AiIcons = __importStar(require("react-icons/ai"));
const GiIcons = __importStar(require("react-icons/gi"));
const Vscicons = __importStar(require("react-icons/vsc"));
//GiAcorn
//array that holds the icons in sidebar
exports.SideNavTabs = [
    {
        title: "Home",
        path: "/",
        icon: react_1.default.createElement(Vscicons.VscSquirrel, null),
        cName: "nav-text",
    },
    {
        title: "Data Generation",
        path: "/DataGeneration",
        icon: react_1.default.createElement(GiIcons.GiAcorn, null),
        cName: "nav-text",
    },
    {
        title: "Data Visualization",
        path: "/DataVisualization",
        icon: react_1.default.createElement(AiIcons.AiOutlinePieChart, null),
        cName: "nav-text",
    },
    {
        title: "About",
        path: "/About",
        icon: react_1.default.createElement(GiIcons.GiLeafSwirl, null),
        cName: "nav-text",
    },
    {
        title: "Settings",
        path: "/Settings",
        icon: react_1.default.createElement(GiIcons.GiSettingsKnobs, null),
        cName: "nav-text settings-icon",
    },
];
//# sourceMappingURL=SideNavTabs.js.map