const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow;


app.on('ready',function(){
  mainWindow = new BrowserWindow({width: 1024, height: 768,backgroundColor: '#ffffff', icon: __dirname + './img/icono.ico'});
  //mainWindow.loadURL('https://github.com');
   mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
    
  }));
    mainWindow.webContents.openDevTools()
});