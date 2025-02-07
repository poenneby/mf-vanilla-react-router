import { federation } from "@module-federation/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    federation({
      name: "host",
      manifest: true,
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
        },
      },
      shared: {
        react: {},
        "react-dom": {},
        "react-router-dom": {},
      },
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
