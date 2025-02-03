import { defineConfig } from "vite";

export default defineConfig({
  base: "/Snake2D_p5js_OOP_game/",
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
