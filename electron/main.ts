import { app, BrowserWindow } from "electron";
import installExtension, {REACT_DEVELOPER_TOOLS} from "electron-devtools-installer"
import * as path from "path";
import * as url from "url";
import('react-devtools-electron')

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1400,
    icon: "./assets/templogo.png",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  //macOS dock settings for logo
  if (process.platform === 'darwin') {
    app.dock.setIcon("./assets/templogo.png");
  }
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`http://localhost:3000`);
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;
