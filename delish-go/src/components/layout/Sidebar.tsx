import { Home, ShoppingCart, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Orders", path: "/orders", icon: ShoppingCart },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      <div className="mb-10 text-2xl font-black text-orange-500 italic">
        DelishGo.
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                  : "text-gray-500 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all mt-auto">
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
}
