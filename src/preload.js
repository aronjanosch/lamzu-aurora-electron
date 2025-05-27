const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App information
  getVersion: () => process.env.npm_package_version || '1.0.0',
  getPlatform: () => process.platform,

  // Window controls
  minimize: () => ipcRenderer.invoke('window-minimize'),
  maximize: () => ipcRenderer.invoke('window-maximize'),
  close: () => ipcRenderer.invoke('window-close'),

  // Device information (if needed for debugging)
  getDeviceInfo: () => ipcRenderer.invoke('get-device-info'),

  // Event listeners
  onWindowStateChange: (callback) => {
    ipcRenderer.on('window-state-changed', callback);
  },

  // Remove listeners
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});

// Inject custom styles for better integration
window.addEventListener('DOMContentLoaded', () => {
  // Add custom CSS for better desktop app experience
  const style = document.createElement('style');
  style.textContent = `
    /* Hide browser-specific elements that don't make sense in desktop app */
    [data-testid="browser-warning"],
    .browser-warning,
    .download-app-banner {
      display: none !important;
    }
    
    /* Improve scrollbar styling for desktop */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    
    /* Ensure proper focus styles for keyboard navigation */
    button:focus,
    input:focus,
    select:focus {
      outline: 2px solid #007acc;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
});

// Console branding
console.log('%cLamzu Aurora Electron', 'color: #007acc; font-size: 16px; font-weight: bold;');
console.log('Desktop app version running...'); 