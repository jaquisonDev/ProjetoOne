import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nome exato do repositório no GitHub entre barras
  base: "/projetosr/",
  build: {
    // Garante que os arquivos gerados vão para a pasta 'dist'
    outDir: "dist",
  },
});
