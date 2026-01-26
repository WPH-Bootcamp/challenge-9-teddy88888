interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      {/* Container Gambar */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <img
          src={
            item.image || "https://via.placeholder.com/300x200?text=No+Image"
          }
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-orange-600">Terlaris</span>
        </div>
      </div>

      {/* Konten Text */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-800 text-lg leading-tight truncate flex-1">
            {item.name}
          </h3>
        </div>

        <p className="text-gray-400 text-xs line-clamp-2 h-8">
          {item.description}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-orange-500 font-extrabold text-lg">
            Rp {new Intl.NumberFormat("id-ID").format(item.price)}
          </span>
          <button className="bg-orange-500 text-white p-2 rounded-xl hover:bg-orange-600 active:scale-95 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
