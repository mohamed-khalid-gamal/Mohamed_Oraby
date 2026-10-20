import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'copy-standalone-assets',
      closeBundle() {
        try {
          fs.copyFileSync(path.resolve(__dirname, 'script.js'), path.resolve(__dirname, 'dist/script.js'));
          fs.copyFileSync(path.resolve(__dirname, 'styles.css'), path.resolve(__dirname, 'dist/styles.css'));
          console.log('[build] Copied fallback standalone script.js and styles.css to dist/');
        } catch (e) {
          console.error('[build] Error copying standalone assets:', e);
        }
      }
    }
  ]
});
