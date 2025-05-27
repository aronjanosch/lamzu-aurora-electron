const { app, BrowserWindow, session } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        icon: path.join(__dirname, '../assets/icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            webSecurity: true,
            allowRunningInsecureContent: false,
            preload: path.join(__dirname, 'preload.js')
        },
        show: false, // Don't show until ready
        titleBarStyle: 'default'
    });

    // Load the Lamzu configuration website
    mainWindow.loadURL('https://www.lamzu.net/#/project/items');

    // Show window when ready to prevent visual flash
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();

        // Focus on window
        if (process.platform === 'darwin') {
            mainWindow.focus();
        }
    });

    // Handle window closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Handle external links - open in default browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        require('electron').shell.openExternal(url);
        return { action: 'deny' };
    });

    // Set up WebHID and WebUSB permissions
    setupHardwarePermissions();

    // Open DevTools in development
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }
}

function setupHardwarePermissions() {
    // Enable WebHID support
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        if (permission === 'hid' || permission === 'usb') {
            // Allow HID and USB permissions for mouse configuration
            callback(true);
        } else {
            callback(false);
        }
    });

    // Handle device permission requests
    session.defaultSession.setDevicePermissionHandler((details) => {
        // Allow Lamzu devices (you may need to adjust vendor IDs)
        if (details.deviceType === 'hid' || details.deviceType === 'usb') {
            return true;
        }
        return false;
    });

    // Set up WebHID API
    session.defaultSession.on('select-hid-device', (event, details, callback) => {
        event.preventDefault();
        // Auto-select the first available HID device (typically the mouse)
        if (details.deviceList && details.deviceList.length > 0) {
            callback(details.deviceList[0].deviceId);
        } else {
            callback();
        }
    });
}

// App event handlers
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        // On macOS, re-create window when dock icon is clicked
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    // On macOS, keep app running even when all windows are closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
    contents.on('new-window', (event, navigationUrl) => {
        event.preventDefault();
        require('electron').shell.openExternal(navigationUrl);
    });
});

// Handle certificate errors (for development)
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    if (process.env.NODE_ENV === 'development') {
        // In development, ignore certificate errors
        event.preventDefault();
        callback(true);
    } else {
        // In production, use default behavior
        callback(false);
    }
}); 