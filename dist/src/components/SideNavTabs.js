"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideNavTabs = void 0;
const react_1 = __importDefault(require("react"));
//array that holds the icons in sidebar
exports.SideNavTabs = [
    {
        title: "Home",
        path: "/",
        icon: react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 516.78 483" },
            react_1.default.createElement("path", { d: "M139.38 250.55c-21.15-13.22-27.19-17.75-39.15-37.89-11.96-20.13-17.93-41.49-17.93-64.07 0-22.2 5.78-43.18 17.35-62.94C111.2 65.89 128.36 50 151.1 37.95c22.73-12.04 50.17-18.06 82.32-18.06h127.59c17.25 0 33.12 3.95 47.63 11.85 14.49 7.9 26.06 18.63 34.69 32.18 8.62 13.55 12.94 28.42 12.94 44.6 0 15.05-21.18 55.39-36.44 54.37-20.14-1.35-54.48-39.98-75-28.35-23.73 13.46 1.43 30.62 2.07 30.99 18.69 10.63 61.16 23.05 79.97 46.57 18.82 23.52 28.22 49.96 28.22 79.31 0 22.58-5.79 43.66-17.35 63.22l-60.25 91.38c-20.76 36.07-39.88 10.68-53.2.86-68.97-50.85-138.7.37-138.7.37-54.22 48.3-58.44-15.65-58.44-15.65-4.96-36.05-30.97-21.28-45.13-19.93-33.41 3.17-37.18-16.41-38.26-27.89-4.08-43.38 31.18-57.14 31.18-57.14-8.5-19.05-9.07-33.85 0-36.88 9.9-3.3 34.72 18.51 34.72 18.51 102.03-76.87 223.2-10.2 223.2-10.2", fill: "none", stroke: "#f5f7fa", strokeWidth: "35.00", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10" })),
        cName: "nav-text",
    },
    {
        title: "Data Generation",
        path: "/DataGeneration",
        icon: react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
            react_1.default.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
            react_1.default.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })),
        cName: "nav-text",
    },
    {
        title: "Data Visualization",
        path: "/DataVisualization",
        icon: react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            react_1.default.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })),
        cName: "nav-text",
    },
];
//# sourceMappingURL=SideNavTabs.js.map