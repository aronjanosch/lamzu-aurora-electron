# Contributing to Lamzu Aurora Desktop

Thank you for your interest in contributing to Lamzu Aurora Desktop! This guide will help you get started.

## Development Setup

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)
- Git

### Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/lamzu-aurora-dekstop.git
   cd lamzu-aurora-desktop
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development:
   ```bash
   npm run dev
   ```

### Development Workflow
- `npm run dev` - Start in development mode (with DevTools)
- `npm start` - Start in production mode
- `npm run build` - Build for current platform
- `npm run dist` - Create distributable packages

## Project Structure

```
src/
├── main.js          # Main Electron process
├── preload.js       # Preload script for security
assets/
├── icon.png         # Application icon (placeholder)
.github/workflows/   # CI/CD workflows
package.json         # Dependencies and scripts
```

## Contributing Guidelines

### Code Style
- Use functional programming patterns
- Follow existing code formatting
- Add comments for complex logic
- Keep functions small and focused

### Security
- Never expose Node.js APIs to the renderer process
- Use the preload script for safe API exposure
- Validate all user inputs
- Follow Electron security best practices

### Testing
- Test on multiple platforms when possible
- Verify WebHID/WebUSB functionality with actual devices
- Check that external links open in default browser

### Pull Requests
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request with:
   - Clear description of changes
   - Screenshots if UI changes
   - Testing instructions

### Issues
- Use the issue templates when available
- Provide detailed reproduction steps for bugs
- Include system information (OS, Node.js version, etc.)

## Hardware Testing

Since this app interfaces with USB devices:
- Test with actual Lamzu mice when possible
- Verify permissions work correctly
- Check device detection and configuration

## Release Process

Releases are automated via GitHub Actions:
1. Create a tag: `git tag v1.0.0`
2. Push the tag: `git push origin v1.0.0`
3. GitHub Actions will build and create a release

## Getting Help

- Check existing issues and discussions
- Join the community discussions
- Ask questions in pull requests

## Code of Conduct

Be respectful and inclusive. This is a community project aimed at improving the Lamzu mouse experience for everyone. 