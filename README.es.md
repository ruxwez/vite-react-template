# Vite React Template

Este proyecto es una plantilla para aplicaciones React utilizando Vite como herramienta de construcción. Está diseñado para ser modular y escalable, con una estructura de carpetas bien organizada.

## Características

- **Vite**: Rápida configuración y construcción de la aplicación.
- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Tipado estático para un desarrollo más seguro.
- **Estructura modular**: Organización clara de módulos y componentes.
- **Soporte para temas**: Implementación de contextos y hooks para manejar temas.

## Estructura del Proyecto

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

## Requisitos Previos

- Node.js (versión 16 o superior)
- pnpm (gestor de paquetes)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/ruxwez/vite-react-template
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd vite-react-template
   ```

3. Instala las dependencias:
   ```bash
   pnpm install
   ```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm preview`: Previsualiza la aplicación construida.
- `pnpm lint`: Ejecuta el linter para verificar el código.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios a tu fork:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.