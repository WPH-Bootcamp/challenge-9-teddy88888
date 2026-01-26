import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Sederhana */}
      <header className="p-4 bg-orange-500 text-white font-bold text-center">
        DELISH-GO TEST
      </header>

      {/* Konten Utama */}
      <main className="p-4">{children}</main>

      {/* Footer Sederhana */}
      <footer className="fixed bottom-0 w-full p-4 bg-gray-100 text-center text-xs">
        Jika Anda melihat ini, berarti Layout sudah normal.
      </footer>
    </div>
  );
}