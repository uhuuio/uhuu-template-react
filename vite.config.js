import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import uhuu from 'vite-plugin-uhuu'
import fs from 'fs';
import path from 'path';

export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // Check if there is a certificate.
    const keyPath = process.env.VITE_HTTPS_KEY;
    const certPath = process.env.VITE_HTTPS_CERT;

    let config = {
      base: '',
      resolve:{
        alias:{
          '@' : path.resolve(__dirname, './src') // alias to src directory
        }
      },
      plugins: [react(), uhuu()]
    };

    // if there is not a certifacate, fallback to http
    if(!keyPath || !certPath) {
      console.log('Running server over HTTP, no env key/cert set up.'); // Set up certificates to serve over HTTPS, check readme.md
      return defineConfig(config);
    }

    // if there is a certificate, configure
    config.server = {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      },
    };

    return defineConfig(config);
}

