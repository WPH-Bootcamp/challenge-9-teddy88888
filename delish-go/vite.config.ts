import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

// Memastikan __dirname bekerja dengan baik di lingkungan ESM (Windows)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Plugins utama untuk menjalankan React dengan SWC (lebih cepat)
  plugins: [react()],

  resolve: {
    alias: {
      // Ini memungkinkan kamu menggunakan import "@/components/..."
      // daripada "../../../components/..."
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    // Menentukan port secara spesifik agar tidak berubah-ubah
    port: 3000,
    // Jika port 3000 dipakai aplikasi lain, Vite akan memberi tahu (bukan pindah port)
    strictPort: true,
    // Membuka browser secara otomatis saat server dijalankan
    open: true,
    // Mengizinkan akses dari jaringan lokal (opsional)
    host: true,
  },

  build: {
    // Folder hasil build saat kamu menjalankan 'npm run build'
    outDir: "dist",
    // Menghapus folder lama sebelum build baru
    emptyOutDir: true,
  },
});
