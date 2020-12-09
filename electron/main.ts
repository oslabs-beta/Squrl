//creates shell of desktop application in electron
import { app, BrowserWindow, ipcMain ,dialog } from "electron";
import * as path from "path";
import * as url from "url";
import fs from 'fs'
import http from 'http'
import axios from 'axios'

// let mainWindow: Electron.BrowserWindow | null;
let mainWindow: any;

function createWindow() {
  mainWindow = new BrowserWindow({
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
    app.dock.setIcon("./assets/logo.png");
  }
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL(`http://localhost:3000`);
    // mainWindow.webContents.openDevTools();
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
  ipcMain.on("download", (event, arg) => {
    console.log(arg)
  dialog.showSaveDialog({
    title: "Save file",
    properties:['createDirectory']
  }).then((filePath_obj:any)=>{
    if (filePath_obj.canceled)
        console.log("canceled")
    else{
      console.log('absolute path: ', filePath_obj.filePath);
      const dest : any = fs.createWriteStream(filePath_obj.filePath+'.sql');
      const request = http.get("http://localhost:30000/faker/create",arg, function(response) {
      response.pipe(dest);
      });
    }
  }).catch(err=>{
    console.log(err)
  })
});

app.on("ready", createWindow);
app.allowRendererProcessReuse = true;
