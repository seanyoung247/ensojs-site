
import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cloudflare } from '@cloudflare/vite-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: 'src',
    base: '/',

    plugins: [
        cloudflare({
            configPath: resolve(__dirname, 'wrangler.jsonc')
        })
    ],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@assets': resolve(__dirname, 'src/assets'),
        }
    },

    build: {
        outDir: '../dist'
    },

    environments: {
        client: {
            build: {
                rollupOptions: {
                    input: {
                        main: resolve(__dirname, 'src/index.html'),
                        docs: resolve(__dirname, 'src/docs/index.html'),
                    }
                }
            }
        }
    }
});