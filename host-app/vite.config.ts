// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "host-app",
        remotes: {
          mfe_hello: env.VITE_MFE_HELLO_URL || "http://localhost:3000/remoteEntry.js",
        },
        shared: {
          react: { requiredVersion: "^18.0.0" },
          "react-dom": { requiredVersion: "^18.0.0" },
        },
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
