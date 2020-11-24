"use strict";
//creates shell of desktop application in electron
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
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = __importStar(require("path"));
const url = __importStar(require("url"));
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        icon: "./assets/templogo.png",
        webPreferences: {
            nodeIntegration: true,
        },
    });
    //macOS dock settings for logo
    if (process.platform === 'darwin') {
        electron_1.app.dock.setIcon("./assets/templogo.png");
    }
    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL(`http://localhost:3000`);
    }
    else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, "../index.html"),
            protocol: "file:",
            slashes: true,
        }));
    }
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.allowRendererProcessReuse = true;
//exports into webpack.electorn.config
//# sourceMappingURL=main.js.map