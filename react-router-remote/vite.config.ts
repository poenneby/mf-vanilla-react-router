import { federation } from "@module-federation/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./greeting": "./src/RemoteGreeting.tsx",
      },
      shared: {
        react: {},
        "react-dom": {},
      },
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
