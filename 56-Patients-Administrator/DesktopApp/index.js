const {app, BrowserWindow} = require('electron');

let win;
const createWindow = () => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        icon: "icon.png",
    });

    //when the window is closed, the app will quit
    win.on('closed', () => {
        win = null;
    })

    //load the index.html file
    win.loadFile('index.html');

    //when the app is ready, show the window
    win.once('ready-to-show', () => {
        win.show();
    })
}

app.on('ready', createWindow);