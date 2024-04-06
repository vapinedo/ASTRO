import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@features": "/src/features",
      "@helpers": "/src/helpers",
      "@models": "/src/models",
      "@redux": "/src/redux",
      "@shared": "/src/shared",
    },
  },
});
