import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base './' : GitHub Pages 하위 경로나 Vercel 어디에 올려도 그대로 동작
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 모집 랜딩(TSX)은 Next 프로젝트에서 옮겨 온 코드라 '@/'가 src/landing을 가리킵니다.
      '@intro': fileURLToPath(new URL('./src/intro', import.meta.url)),
      '@': fileURLToPath(new URL('./src/landing', import.meta.url)),
    },
  },
});
