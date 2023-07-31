import { contextBridge, ipcRenderer } from 'electron'
contextBridge.exposeInMainWorld('electronApi', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})
