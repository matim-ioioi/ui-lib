import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    target: 'ESNext',
    outDir: './dist',
    lib: {
      entry: path.resolve(__dirname, 'src/entry.ts'),
      name: pkg.name,
      fileName: (format) => `entry.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vee-validate'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vee-validate': 'veeValidate',
        },
      },
    },
  },
})
