const { app, BrowserWindow } = require('electron');

function crearVentana() {
  const ventana = new BrowserWindow({
    width: 420,
    height: 760
  });

  ventana.loadFile('index.html');
}

app.whenReady().then(crearVentana);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});