import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 部署到自定义域名根路径时用 SITE_BASE=/ 构建；默认保持 GitHub Pages 子路径
export default defineConfig({
  base: process.env.SITE_BASE ?? "/galgame-sedai/",
  plugins: [tailwindcss(), react()],
});
