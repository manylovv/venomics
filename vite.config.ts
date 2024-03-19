import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Montserrat",
            src: "./src/assets/fonts/montserrat/*.woff2",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
