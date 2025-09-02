# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Build the application:
```bash
npm run build
```

Run development server:
```bash
npm run dev
```

Run linting:
```bash
npm run lint
```

Preview production build:
```bash
npm run preview
```

## Architecture

This is a React + TypeScript + Vite application for TekSquilt with the following structure:

### Tech Stack
- **React 19** with TypeScript
- **Vite** as build tool
- **React Router** for routing
- **Tailwind CSS** with custom configuration and animations
- **Radix UI** for accessible UI components
- **Framer Motion** for animations

### Project Structure
- `src/App.tsx` - Main app router with routes for Home, Services, Jobs, Contact, and About pages
- `src/components/` - Reusable components
  - `layout/` - Layout components (Header, Footer, index wrapper)
  - `ui/` - Base UI components (button, card, dialog, etc.) using Radix UI primitives
- `src/pages/` - Page components for each route
- `src/lib/utils.ts` - Utility functions including `cn()` for className merging

### Key Patterns
- Components use the `cn()` utility from `src/lib/utils.ts` for conditional styling with Tailwind
- Path aliases configured: `@/` maps to `./src/`
- Custom Tailwind colors defined: autumnYellow, hoverColor1-3, social media brand colors
- Custom gradients configured for consistent styling

### TypeScript Configuration
- Strict mode enabled
- Multiple tsconfig files: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- ESLint configured with React hooks and refresh plugins