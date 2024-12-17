import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $routes: path.resolve('./src/routes'),
    },
  },
  server: {
    proxy: {
      '/optimize': {
        target: 'http://localhost:5000', // URL de tu backend Flask
        changeOrigin: true,
        secure: false, // Úsalo si estás en un entorno de desarrollo con HTTPS
        rewrite: (path) => path.replace(/^\/optimize/, '/optimize/'), // Asegura que la barra final se mantenga
      },
    },
  },
};

export default config;
