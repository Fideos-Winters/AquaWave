const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function crearVentana() {
  const ventana = new BrowserWindow({
    width: 420,
    height: 760,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  ventana.loadFile('index.html');
}

app.whenReady().then(crearVentana);

ipcMain.on('ventana:minimizar', (evento) => {
  BrowserWindow.fromWebContents(evento.sender).minimize();
});

ipcMain.on('ventana:cerrar', (evento) => {
  BrowserWindow.fromWebContents(evento.sender).close();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});