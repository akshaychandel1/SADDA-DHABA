// import path from "path"
import tailwindcss from "@tailwindcss/vite"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {

//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   server : {
//     port:60600,
//     cors:true
//   },
// })

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 60600,
    cors: true,
    historyApiFallback: true, // ✅ ensures SPA routing works on reload
  },
});
