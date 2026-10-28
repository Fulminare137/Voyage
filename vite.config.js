/*
  ============================================
  📄 vite.config.js — The Build Tool Configuration
  ============================================

  "Vite" (French for "fast") is our BUILD TOOL.

  What does a build tool do?
  - It takes your React code (which browsers can't read directly)
    and transforms it into plain HTML/CSS/JS that browsers understand.
  - During development, it runs a local server so you can see your
    site at http://localhost:5173 and it auto-refreshes when you save!

  Think of Vite like a translator that converts your React code
  into something the browser speaks.
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Voyage/',
  plugins: [react()], // This plugin teaches Vite how to understand React's JSX syntax
});
