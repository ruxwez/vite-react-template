# Vite React Template

This project is a template for React applications using Vite as the build tool. It is designed to be modular and scalable, with a well-organized folder structure.

## Features

- **Vite**: Fast setup and build for the application.
- **React**: Library for building user interfaces.
- **TypeScript**: Static typing for safer development.
- **Modular structure**: Clear organization of modules and components.
- **Theme support**: Implementation of contexts and hooks to manage themes.

## Project Structure

```
📦 vite-react-template
├── public
│   └── vite.svg
├── src
│   ├── main.tsx
│   ├── routes.tsx
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── modules
│   │   ├── _shared
│   │   │   ├── contexts
│   │   │   ├── hooks
│   │   │   ├── libs
│   │   │   ├── providers
│   │   │   └── services
│   │   ├── auth
│   │   │   ├── routes.tsx
│   │   │   └── pages
│   │   └── default
│   │       ├── routes.tsx
│   │       └── pages
│   └── styles
│       └── globals.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (package manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ruxwez/vite-react-template
   ```

2. Navigate to the project directory:
   ```bash
   cd vite-react-template
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm preview`: Previews the built application.
- `pnpm lint`: Runs the linter to check the code.

## Contribution

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a branch for your feature or bug fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request in the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.