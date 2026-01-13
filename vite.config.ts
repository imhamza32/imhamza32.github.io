import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Universal path fix (Works on Mac, Windows, and GitHub Servers)
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
  // Tells Vite the app source is in 'client'
  root: path.resolve(__dirname, "client"),
  build: {
    // CRITICAL: Builds directly to 'dist' (not dist/public) for GitHub Pages
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  base: "./", // Ensures links work correctly
});