import { defineConfig } from "vite";

export default defineConfig({
  base: "/Snake2D_p5js_OOP_game/",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
