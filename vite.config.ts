import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/galgame-sedai/",
  plugins: [tailwindcss(), react()],
});
