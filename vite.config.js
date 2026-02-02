
import { defineConfig } from 'vite';
import { dirname, resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs';


function cloneIndexTo404() {
  return {
    name: 'clone-index-to-404',
    closeBundle() {
      const outDir = 'dist/docs';
      const indexPath = join(outDir, 'index.html');
      const notFoundPath = join(outDir, '404.html');
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log('Copied index.html to 404.html');
      }
    }
  };
}

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: 'src',
  plugins: [cloneIndexTo404()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
    }
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        docs: resolve(__dirname, 'src/docs/index.html'),
      }
    }
  },
});