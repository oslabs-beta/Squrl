"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const About = () => {
    return (react_1.default.createElement("div", { className: "About" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Squrl v0.1")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, "Created By:"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Trent Currie"),
                react_1.default.createElement("li", null, "Andy Heng"),
                react_1.default.createElement("li", null, "Carlos Pena"),
                react_1.default.createElement("li", null, "Seamus Ryan")))));
};
exports.default = About;
//# sourceMappingURL=About.js.map