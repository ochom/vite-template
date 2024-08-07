import generouted from '@generouted/react-router/plugin';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    generouted(),
    webUpdateNotice({
      notificationProps: {
        title: 'System update',
        description: 'System update, please refresh the page',
        buttonText: 'Refresh',
        dismissButtonText: 'Cancel',
        primaryColor: 'green',
        secondaryColor: 'red'
      }
    })
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  }
});
