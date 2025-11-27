# Orca Browser V1.0.0

A modern, lightweight web browser built with Electron, React, and TypeScript for Windows.

## Features

- 🌐 Full web browsing capability
- 🎨 Modern, clean UI with dark mode support
- ⚡ Fast and lightweight
- 🔒 Privacy-focused
- 📱 Responsive design

## Tech Stack

- **Framework**: Electron 28
- **UI**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build**: Vite 5 + electron-vite

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npx electron-vite build
```

## Project Structure

```
├── src/
│   ├── main/           # Electron main process
│   ├── preload/        # Preload scripts
│   └── renderer/       # React UI
│       └── src/
│           ├── components/
│           │   ├── Sidebar.tsx
│           │   ├── URLBar.tsx
│           │   └── BrowserView.tsx
│           └── App.tsx
├── resources/          # App icons and assets
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npx electron-vite build` - Build for production
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Version

**Current Version**: 1.0.0

## License

See [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
