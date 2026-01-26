import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/api/axios";
import MenuCard from "@/components/menu/MenuCard";

// 1. Definisikan Interface agar tidak ada error 'any'
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function HomePages() {
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Ambil data dari API dengan useQuery
  const {
    data: menus,
    isLoading,
    isError,
  } = useQuery<MenuItem[]>({
    queryKey: ["menus"],
    queryFn: async () => {
      const response = await axiosInstance.get("/menus");
      // Menangani struktur response API { data: { data: [] } } atau { data: [] }
      return response.data.data || response.data;
    },
  });

  // 3. Logika Filter Pencarian
  const filteredMenus = menus?.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // --- RENDERING LOGIC (MENCEGAH LAYAR PUTIH) ---

  // Tampilan saat Loading
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Menyiapkan hidangan lezat...
        </p>
      </div>
    );
  }

  // Tampilan saat Error (Cek koneksi internet atau API)
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-gray-800">
          Ups! Gagal Memuat Menu
        </h2>
        <p className="text-gray-500 mt-2">
          Pastikan server API menyala atau cek koneksi internetmu.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar - Sticky Mobile */}
      <div className="sticky top-0 z-10 bg-gray-50/80 py-2 backdrop-blur-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Mau makan apa hari ini?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border-none rounded-2xl py-4 px-12 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* Grid Menu: 1 kolom (Mobile) | 4 kolom (Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredMenus && filteredMenus.length > 0 ? (
          filteredMenus.map((item) => <MenuCard key={item.id} item={item} />)
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400">Yah, menu "{searchTerm}" tidak ada.</p>
          </div>
        )}
      </div>
    </div>
  );
}