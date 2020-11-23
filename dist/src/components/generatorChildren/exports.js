"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// exports includes lower buttons on generator page
const Exports = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "rowsfield" },
            react_1.default.createElement("h2", { id: "tableInputText" }, "# Of Rows"),
            react_1.default.createElement("input", { placeholder: "1" })),
        react_1.default.createElement("div", { id: "tablefields" },
            react_1.default.createElement("h2", { id: "tableInputText" }, "Table Name"),
            react_1.default.createElement("input", { placeholder: "Table One" })),
        react_1.default.createElement("div", { id: "duplicatedata" },
            react_1.default.createElement("button", { id: "duplicate" }, "Duplicate Table")),
        react_1.default.createElement("div", { id: "formatinput" },
            react_1.default.createElement("h2", null, "Format:"),
            react_1.default.createElement("select", { id: "formatoption", placeholder: " Select" },
                react_1.default.createElement("option", null, "Select"))),
        react_1.default.createElement("div", { id: "download" },
            react_1.default.createElement("button", null, "Download Data"))));
};
exports.default = Exports;
//# sourceMappingURL=exports.js.map