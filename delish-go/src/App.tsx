import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://restaurant-be-400174736012.asia-southeast2.run.app/list",
        );
        const data = await response.json();
        const list = data.restaurants || data;
        setRestaurants(Array.isArray(list) ? list : []);
        setLoading(false);
      } catch (err) {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredRestaurants = restaurants.filter((res: any) =>
    res.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // --- KONDISI 1: HALAMAN REGISTER ---
  if (currentPage === "register") {
    return (
      <div className="min-h-screen bg-[#333333] flex items-center justify-center p-4">
        <div className="bg-white rounded-[2rem] overflow-hidden flex max-w-5xl w-full shadow-2xl h-[600px]">
          <div className="hidden md:block w-1/2 relative">
            <img
              src="/Fill.png"
              className="w-full h-full object-cover"
              alt="Register Burger"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800")
              }
            />
          </div>

          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <div
              className="flex items-center gap-2 mb-8 cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <h2 className="text-xl font-bold text-gray-800">Foody</h2>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h3>
            <p className="text-gray-500 mb-8">
              Join us and enjoy delicious foods.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all text-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all text-black"
              />
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                Register
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-red-600 font-bold cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- KONDISI 2: HALAMAN HOME (Wajib pakai return) ---
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-orange-500">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/5 px-6 md:px-16 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          <img
            src="/Logo.png"
            alt="logo"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="text-2xl font-black tracking-tighter">
            Foody<span className="text-orange-500">.</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-10 items-center font-medium text-sm uppercase tracking-widest text-gray-400">
          <a href="#" className="text-white border-b-2 border-orange-500 pb-1">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Discover
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 pl-2 pr-4 py-1.5 rounded-full text-white">
            <img
              src="https://i.pravatar.cc/100"
              className="w-7 h-7 rounded-full border border-orange-500"
              alt="user"
            />
            <span className="text-xs font-semibold">Teddy</span>
          </div>
          {/* Tambahkan onClick agar tombol Sign In berfungsi */}
          <button
            onClick={() => setCurrentPage("register")}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/Frame-85.png"
            className="w-full h-full object-cover brightness-[110%]"
            alt="Hero Background"
            onError={(e) =>
              (e.currentTarget.src =
                "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600")
            }
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0F0F0F]"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Culinary
            </span>{" "}
            Experiences
          </h2>
          <div className="relative w-full max-w-2xl mx-auto group">
            <div className="relative flex items-center bg-white rounded-full p-2 shadow-2xl">
              <span className="pl-6 text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search restaurants, food and drink..."
                className="w-full py-4 pl-4 pr-6 rounded-full bg-transparent text-black text-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESTAURANT LIST */}
      <main className="container mx-auto px-6 md:px-16 py-24">
        <h3 className="text-4xl font-black mb-16">Our Best Selection</h3>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-80 bg-white/5 rounded-3xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRestaurants.map((res: any) => (
              <div
                key={res.id}
                className="group bg-[#161616] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-xl shadow-black"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={`https://restaurant-api.dicoding.dev/images/medium/${res.pictureId}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={res.name}
                  />
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-1.5 font-bold">
                    ⭐ {res.rating}
                  </div>
                </div>
                <div className="p-8 text-white">
                  <span className="text-orange-500 font-bold text-xs uppercase block mb-3">
                    📍 {res.city}
                  </span>
                  <h4 className="text-2xl font-black mb-4">{res.name}</h4>
                  <button className="w-full py-4 bg-orange-500 text-white rounded-2xl font-extrabold hover:bg-white hover:text-black transition-all">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Categories & Recommended Section (Bagian Putih) */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 mt-16 text-black">
          <div className="flex flex-wrap gap-8 justify-center mb-16 text-gray-400 font-bold uppercase text-xs">
            <div className="flex flex-col items-center gap-2">
              <img src="/all.png" alt="all" className="w-12" />
              <span>All Restaurants</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/near.png" alt="near" className="w-12" />
              <span>Nearby</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/diskon.png" alt="diskon" className="w-12" />
              <span>Discount</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/bestseler.png" alt="best" className="w-12" />
              <span>Best Seller</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/deliveri.png" alt="delivery" className="w-12" />
              <span>Delivery</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-10">
            <h3 className="text-4xl font-black">Recommended</h3>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="/CardRestaurant.png" alt="card" className="w-full" />
            <img src="/CardRestaurant.png" alt="card" className="w-full" />
            <img src="/CardRestaurant.png" alt="card" className="w-full" />
          </div>
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-black py-20 border-t border-white/5 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <img src="/Logo.png" alt="logo" className="w-8" />
          <h4 className="text-xl font-black text-white">Foody.</h4>
        </div>
        <p className="text-gray-600 text-sm max-w-sm mx-auto mb-10">
          The best way to find your next meal. Explore restaurants with ease and
          comfort.
        </p>
        <div className="text-[10px] text-gray-800 tracking-[0.5em] uppercase">
          © 2026 Developed by Teddy • Challenge 9
        </div>
      </footer>
    </div>
  );
}

export default App;
