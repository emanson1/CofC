import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // From our previous fix
    'process.env': {}, // Add this line to mock process.env variables
  },
  optimizeDeps: {
    include: [
      '@material-ui/core',
      '@material-ui/core/styles',
      '@material-ui/styles'
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});