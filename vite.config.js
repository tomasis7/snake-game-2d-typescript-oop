import { defineConfig } from "vite";

export default defineConfig({
  base: "/snake-game/",
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
  },
  server: {
    open: true,
  },
});
