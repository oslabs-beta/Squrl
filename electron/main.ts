import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';


let mainWindow : Electron.BrowserWindow | null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (process.env.NODE_ENV === 'development'){
        mainWindow.loadURL(`http://localhost:3000`);
    }else{
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "../index.html"),
                protocol: 'file:',
                slashes:true,
            })
        )
    }
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;