import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
