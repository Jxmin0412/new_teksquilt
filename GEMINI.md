## Project Overview

This project is a website for Teksquilt, a staffing and recruiting agency. It is built with React, TypeScript, and Vite, and uses Tailwind CSS for styling. The website features a modern design with animations and a video background.

### Key Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Framer Motion:** A React library for creating animations.
*   **React Router:** A library for handling routing in React applications.
*   **shadcn/ui:** A collection of reusable UI components.

### Architecture

The project follows a standard React project structure. The `src` directory contains the main application logic, including components, pages, and hooks. The `public` directory contains static assets, such as images and videos.

## Building and Running

To build and run the project, you will need to have Node.js and npm installed on your machine.

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

3.  **Build for production:**

    ```bash
    npm run build
    ```

4.  **Lint the code:**

    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes should be used whenever possible. Custom CSS should be kept to a minimum.
*   **Components:** Components should be small and reusable. They should be organized into subdirectories based on their function (e.g., `layout`, `ui`).
*   **State Management:** For simple state management, React's built-in `useState` and `useEffect` hooks should be used. For more complex state, a dedicated state management library (e.g., Redux, Zustand) could be considered.
*   **Routing:** The project uses React Router for routing. Routes should be defined in the `src/App.tsx` file.
*   **Animations:** The project uses Framer Motion for animations. Animations should be used to enhance the user experience, but should not be overused.
