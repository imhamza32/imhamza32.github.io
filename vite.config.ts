import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Universal fix for directory paths (Works on Windows/Linux/GitHub)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // Crucial: Tells Vite your website source is inside 'client'
  root: path.resolve(__dirname, "client"),
  build: {
    // Crucial: Puts the finished website in the main 'dist' folder
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  base: "./", // Ensures images/links work on GitHub Pages
});