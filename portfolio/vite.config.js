import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Ensures Vite serves from the project root
  build: {
    outDir: "dist", // Tells Vite to output the build to 'dist'
    emptyOutDir: true, // Clears the dist folder before building
  },
});
