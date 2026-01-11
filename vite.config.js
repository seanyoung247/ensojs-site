
import { defineConfig } from 'vite';
import path from 'path';


function cloneIndexTo404() {
  return {
    name: 'clone-index-to-404',
    closeBundle() {
      const outDir = 'dist/docs';
      const indexPath = path.join(outDir, 'index.html');
      const notFoundPath = path.join(outDir, '404.html');
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log('Copied index.html to 404.html');
      }
    }
  };
}


export default defineConfig({
  plugins: [cloneIndexTo404()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  }
});
