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
//creates shell of desktop application in electron
const electron_1 = require("electron");
const path = __importStar(require("path"));
const url = __importStar(require("url"));
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
// let mainWindow: Electron.BrowserWindow | null;
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1665,
        height: 937,
        // resizable: false,
        // 'minHeight': 960,
        // 'minWidth': 540,
        // 'maxHeight': 1920,
        // 'maxWidth': 1080,
        icon: "./assets/logo.png",
        webPreferences: {
            nodeIntegration: true,
        },
    });
    //macOS dock settings for logo
    if (process.platform === 'darwin') {
        electron_1.app.dock.setIcon("./assets/logo.png");
    }
    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL(`http://localhost:3000`);
        // mainWindow.webContents.openDevTools();
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
electron_1.ipcMain.on("download", (event, arg) => {
    console.log(arg);
    electron_1.dialog.showSaveDialog({
        title: "Save file",
        properties: ['createDirectory']
    }).then((filePath_obj) => {
        if (filePath_obj.canceled)
            console.log("canceled");
        else {
            console.log('absolute path: ', filePath_obj.filePath);
            const dest = fs_1.default.createWriteStream(filePath_obj.filePath + '.sql');
            const request = http_1.default.get("http://localhost:30000/faker/create", arg, function (response) {
                response.pipe(dest);
            });
        }
    }).catch(err => {
        console.log(err);
    });
});
electron_1.app.on("ready", createWindow);
electron_1.app.allowRendererProcessReuse = true;
//# sourceMappingURL=main.js.map