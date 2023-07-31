import path from "path"
import { app, BrowserWindow, ipcMain } from 'electron'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: false // 关闭跨域检查
    }
  })
  ipcMain.on("set-title", (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })
  win.webContents.openDevTools()
  const url = process.argv[2]
  if (url) {
    win.loadURL(url)
  } else {
    win.loadFile("index.html")
  }
})
