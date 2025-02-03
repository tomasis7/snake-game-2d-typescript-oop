import { defineConfig } from "vite";

export default defineConfig({
  base: "/Snake2D_p5js_OOP_game/",
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
  },
  server: {
    open: true,
  },
});
