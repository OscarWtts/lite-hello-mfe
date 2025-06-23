import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "lite_hello",
      filename: "remoteEntry.js",
      exposes: {
        "./Hello": "./src/components/Hello.tsx",
      },
      shared: {
        react: { requiredVersion: "^18.0.0" },
        "react-dom": { requiredVersion: "^18.0.0" },
      },
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
    minify: false,
    outDir: "dist",
    assetsDir: '',
  },
  preview: {
    port: 3000
  },
});
