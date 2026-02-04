import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  
  build: {
    // Advanced code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          ui: ['clsx', 'tailwind-merge']
        },
        
        // Optimize chunk naming for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
        
        // Manual deduplication for common packages
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separate large dependencies
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            return 'vendor';
          }
        }
      },
      
      // Remove console and debugger in production
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    
    // Minification with esbuild
    minify: 'esbuild',
    esbuildOptions: {
      target: 'es2015',
      treeShaking: true,
      legalComments: 'none',
      drop: ['console', 'debugger', 'assert'],
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    },
    
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,
    
    // Module resolution
    target: 'es2015',
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500
  },
  
  // Dev server with optimization
  server: {
    host: true,
    port: 5173,
    hmr: true,
    cors: true,
    
    // Dependency optimization
    optimizeDeps: {
      include: [
        'react',
        'react-dom', 
        'framer-motion',
        'react-router-dom'
      ],
      exclude: []
    }
  },
  
  // Preview server
  preview: {
    host: true,
    port: 4173,
    strictPort: true
  },
  
  // Module resolution
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json'],
    mainFields: ['module', 'main'],
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@pages': '/src/pages'
    }
  },
  
  // CSS configuration
  css: {
    postcss: {
      plugins: []
    },
    preprocessorOptions: {}
  }
});
