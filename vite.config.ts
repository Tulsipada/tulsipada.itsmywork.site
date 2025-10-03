import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Optimize module resolution
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development' ? 'inline' : false, // Only include sourcemaps in dev
    minify: mode === 'production' ? 'esbuild' : false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - split further
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core';
          }
          if (id.includes('react-dom')) {
            return 'react-dom';
          }
          
          // Three.js libraries - only load when explicitly imported
          if (id.includes('three/build/three')) {
            return 'three-core';
          }
          if (id.includes('@react-three/fiber')) {
            return 'three-fiber';
          }
          if (id.includes('@react-three/drei')) {
            return 'three-drei';
          }
          
          // UI components - split by category
          if (id.includes('@radix-ui/react-slot') || id.includes('@radix-ui/react-toast') || id.includes('@radix-ui/react-tooltip')) {
            return 'ui-core';
          }
          if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-dropdown-menu') || id.includes('@radix-ui/react-popover')) {
            return 'ui-overlay';
          }
          if (id.includes('@radix-ui/react-accordion') || id.includes('@radix-ui/react-tabs') || id.includes('@radix-ui/react-collapsible')) {
            return 'ui-layout';
          }
          if (id.includes('lucide-react')) {
            return 'ui-icons';
          }
          
          // Animation libraries
          if (id.includes('framer-motion')) {
            return 'motion-vendor';
          }
          
          // Router
          if (id.includes('react-router')) {
            return 'router-vendor';
          }
          
          // Form libraries
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'form-vendor';
          }
          
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
            return 'utils-vendor';
          }
          
          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk sizes
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // External dependencies that shouldn't be bundled
      external: [],
    },
    // Optimize for production
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 300, // Further reduced warning limit
    // Enable tree shaking
    treeshake: {
      moduleSideEffects: false,
    },
    // Additional optimizations
    reportCompressedSize: false, // Disable gzip size reporting for faster builds
  },
}));
