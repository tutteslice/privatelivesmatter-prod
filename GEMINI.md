# Rooth Portfolio & E-commerce Site

## Project Overview
This project is a comprehensive portfolio and e-commerce application built with **React 19**, **TypeScript**, and **Tailwind CSS**. It serves as a personal showcase for created tools, recommended resources, and a functional store. The application is designed as a Single Page Application (SPA) using `HashRouter` and is configured to produce a single-file output for easy deployment (e.g., static hosting).

## Technology Stack
- **Framework:** React 19
- **Build Tool:** Vite 7 (configured with `vite-plugin-singlefile`)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4 (with `clsx` and `tailwind-merge` via a `cn` utility)
- **Routing:** React Router DOM 7 (using `HashRouter`)
- **Icons:** Lucide React

## Project Structure
The source code is located in the `src/` directory with the following organization:

- **`components/`**: Reusable UI components (e.g., `Navbar`, `Footer`, `CartDrawer`).
- **`pages/`**: Top-level page components corresponding to routes (e.g., `Home`, `Store`, `About`).
- **`context/`**: React Context providers for global state management:
  - `CartContext`: Manages shopping cart state (items, quantities).
  - `ThemeContext`: Manages UI theming (if implemented).
- **`data/`**: Static data files defining content for the site:
  - `products.ts`: Store inventory.
  - `tools.ts`: Portfolio of created tools.
  - `articles.ts`: Informational content.
- **`types/`**: TypeScript interfaces and type definitions (e.g., `Product`, `CartItem`, `Tool`).
- **`utils/`**: Helper functions, primarily `cn.ts` for efficient Tailwind class merging.

## Development & Usage

### Prerequisites
- Node.js (Latest Stable recommended)
- npm

### Key Scripts
Run these commands from the project root:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server with hot module replacement (HMR). |
| `npm run build` | Builds the production-ready application. Uses `vite-plugin-singlefile` to bundle assets inline. |
| `npm run preview` | Locally previews the production build. |

### Configuration
- **Vite (`vite.config.ts`):** Configured with plugins for React, Tailwind, and SingleFile. Defines the `@` alias pointing to `src/`.
- **TypeScript (`tsconfig.json`):** Standard React/Vite TypeScript configuration.

## Key Conventions
- **Styling:** Use Tailwind CSS utility classes. For conditional classes or merging custom classes, use the `cn()` utility (e.g., `className={cn("base-class", condition && "active-class")}`).
- **Routing:** Uses `HashRouter`, meaning URLs will appear as `/#/store`, `/#/about`, etc. This ensures compatibility with static file hosting services that don't support server-side routing rewrites.
- **State:** Prefer React Context for global state (Cart, Theme) and local state for component-specific logic.
