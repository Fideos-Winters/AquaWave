const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  minimizar: () => ipcRenderer.send('ventana:minimizar'),
  cerrar: () => ipcRenderer.send('ventana:cerrar')
});