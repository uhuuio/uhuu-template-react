import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import uhuu from 'vite-plugin-uhuu'
import fs from 'fs';


export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // Local development must be over SSL, set up certificate.
    const keyPath = process.env.VITE_HTTPS_KEY;
    const certPath = process.env.VITE_HTTPS_CERT;

    // Ensure certifacates are set
    if(!keyPath || !certPath) {
      console.log('⛔️ Server should run over https, please set up a certificate. (Readme.md)');
      process.exit();
    }

    console.log(mode);

    // vite config
    return defineConfig({
      base: '', // deployed uhuu template should have empty base path (relative).
      server: {
        https: {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath),
        },
      },
      plugins: [react(), uhuu()]
    })
}

