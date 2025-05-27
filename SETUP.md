# Development Environment Setup

## Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm** (comes with Node.js)
- **Git**

## Quick Setup

### 1. Install Node.js
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Arch Linux
sudo pacman -S nodejs npm

# macOS (with Homebrew)
brew install node

# Windows
# Download from https://nodejs.org/
```

### 2. Clone and Setup Project
```bash
git clone https://github.com/aronjanosch/lamzu-aurora-dekstop.git
cd lamzu-aurora-dekstop
npm install
```

### 3. Start Development
```bash
npm run dev
```

That's it! The app will open with DevTools enabled for debugging.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start in development mode (with DevTools) |
| `npm start` | Start in production mode |
| `npm run build` | Build for current platform |
| `npm run dist` | Create distributable packages |

## USB Device Access

### Linux
For mouse connectivity, you may need USB permissions:

```bash
# Add your user to dialout group (one-time setup)
sudo usermod -a -G dialout $USER

# Or run with sudo for testing
sudo npm run dev
```

### Windows/macOS
USB access should work out of the box.

## Development Features

- **Auto DevTools**: Opens automatically in development mode
- **WebHID/WebUSB**: Full mouse connectivity support
- **Hot Restart**: Restart with `Ctrl+R` in the app
- **External Links**: Open in default browser automatically

## Testing Mouse Connectivity

1. Connect your Lamzu mouse via USB
2. Start the app: `npm run dev`
3. The website should detect your mouse automatically
4. Check DevTools console for any connection issues

## Building for Distribution

```bash
# Build for your current platform
npm run build

# Build for specific platforms
npm run build:linux    # AppImage + deb
npm run build:win      # Windows installer
npm run build:mac      # macOS dmg

# Create all distributables
npm run dist
```

## Troubleshooting

**Node.js version issues?**
```bash
node --version  # Should be 18+
npm --version   # Should be 8+
```

**Permission errors on Linux?**
```bash
sudo chown -R $USER:$USER ~/.npm
sudo npm run dev  # For USB access
```

**App won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Mouse not detected?**
- Verify USB connection
- Try different USB port
- Check `lsusb` output on Linux
- Restart the app

**Website won't load?**
- Check internet connection
- Verify firewall settings
- Try: `curl https://www.lamzu.net`

## Project Structure

```
src/
├── main.js          # Main Electron process
├── preload.js       # Preload script for security
assets/
├── icon.png         # Application icon (placeholder)
package.json         # Dependencies and scripts
```

## Next Steps

1. **Replace the icon** in `assets/icon.png` with actual app icon
2. **Test with real Lamzu mouse** for hardware connectivity
3. **Customize UI** via preload.js if needed
4. **Build and distribute** when ready 