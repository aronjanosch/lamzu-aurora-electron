# Lamzu Aurora Electron

A standalone desktop application for configuring Lamzu mice without needing to open a web browser. This Electron-based app wraps the official Lamzu configuration website with full WebHID/WebUSB support for device connectivity.

## Features

- 🖱️ **Full Mouse Support** - Configure all Lamzu mouse settings
- 🔌 **Direct USB Connection** - WebHID/WebUSB support for device communication
- 🖥️ **Native Desktop App** - No browser required
- 🔄 **Auto-Updates** - Stay current with the latest features
- 🌍 **Cross-Platform** - Works on Linux, Windows, and macOS

## Installation

### From Releases (Recommended)
1. Go to the [Releases](../../releases) page
2. Download the appropriate file for your system:
   - **Linux**: `.AppImage` or `.deb`
   - **Windows**: `.exe` installer
   - **macOS**: `.dmg`
3. Install and run

### From Source
```bash
git clone https://github.com/aronjanosch/lamzu-aurora-electron.git
cd lamzu-aurora-electron
npm install
npm start
```

## Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

### Quick Start
```bash
git clone https://github.com/aronjanosch/lamzu-aurora-electron.git
cd lamzu-aurora-electron
npm install
npm run dev
```

### Development Commands
```bash
# Start in development mode (with DevTools)
npm run dev

# Start in production mode
npm start

# Build for current platform
npm run build

# Build for specific platforms
npm run build:linux
npm run build:win
npm run build:mac

# Create distributable packages
npm run dist
```

## Usage

1. Launch the application
2. Connect your Lamzu mouse via USB
3. The app will automatically detect your device
4. Configure settings as needed through the familiar web interface

## Device Compatibility

This app supports all Lamzu mice that work with the official web configurator:
- Atlantis series
- Thorn series
- Maya series
- And other current models

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Issues
- Report bugs via [GitHub Issues](../../issues)
- Request features via [GitHub Issues](../../issues)
- Check existing issues before creating new ones

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

- Lamzu for creating excellent gaming mice
- The community for requesting and supporting this project
- Electron team for the cross-platform framework

---

**Note**: This is an unofficial community project. For official support, please contact Lamzu directly.