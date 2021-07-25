const express = require('express')
const appli = express()
const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadURL('http://localhost:3000')
  }
  

appli.set('view engine', 'ejs');

appli.get('/', (req, res) => {
    res.render('config');
});

appli.listen(3000, () => {
    console.log(`Server started on 3000`);
});
app.whenReady().then(() => {
  createWindow()
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})