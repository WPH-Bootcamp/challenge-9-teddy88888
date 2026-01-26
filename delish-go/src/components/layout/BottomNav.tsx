import { Home, Search, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Cari", path: "/search", icon: Search },
    { name: "Pesanan", path: "/orders", icon: ShoppingBag },
    { name: "Profil", path: "/profile", icon: User },
  ];

  return (
    <div className="flex justify-around items-center h-16 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center gap-1 flex-1 transition-all ${
              isActive ? "text-orange-500 scale-110" : "text-gray-400"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
