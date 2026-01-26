import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

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
if (currentPage === "register") {
    return (
      <div className="min-h-screen bg-[#333333] flex items-center justify-center p-4">
        <div className="bg-white rounded-[2rem] overflow-hidden flex max-w-5xl w-full shadow-2xl h-[600px]">
          {/* Sisi Kiri: Gambar Burger (Sama seperti di Figma) */}
          <div className="hidden md:block w-1/2 relative">
            <img 
              src="/Fill.png" 
              className="w-full h-full object-cover" 
              alt="Register Burger"
              onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800"}
            />
          </div>

          {/* Sisi Kanan: Form Register */}
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => setCurrentPage("home")}>
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
              <h2 className="text-xl font-bold text-gray-800">Foody</h2>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h3>
            <p className="text-gray-500 mb-8">Join us and enjoy delicious foods.</p>

            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all" />
              <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all" />
              <input type="password" placeholder="Password" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 outline-none focus:border-red-500 transition-all" />
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                Register
              </button>
            </div>
            
            <p className="text-center mt-6 text-sm text-gray-500">
              Already have an account? <span className="text-red-600 font-bold cursor-pointer">Login</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-orange-500">
      {/* 1. NAVBAR (Sticky & Glassmorphism) */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/5 px-6 md:px-16 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/Logo.png" alt="logo" />
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
          <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 pl-2 pr-4 py-1.5 rounded-full">
            <img
              src="https://i.pravatar.cc/100"
              className="w-7 h-7 rounded-full border border-orange-500"
              alt="user"
            />
            <span className="text-xs font-semibold">Teddy</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-500/20">
            Sign In
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION (Main Banner) */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Hero Background - Pastikan ada file gambar di public */}
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

        <div className="relative z-10 max-w-4xl animate-in fade-in zoom-in duration-700">
          <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            The Best Food Finder
          </span>
          <h2 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Culinary
            </span>{" "}
            Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Search and refine your choice to discover the perfect restaurant.
            Taste the difference in every bite.
          </p>

          {/* Search Bar ala Figma */}
          <div className="relative w-full max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
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

      {/* 3. RESTAURANT LIST SECTION */}
      <main className="container mx-auto px-6 md:px-16 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h3 className="text-4xl font-black mb-4">Our Best Selection</h3>
            <p className="text-gray-500 max-w-md italic font-serif text-lg">
              "People who love to eat are always the best people."
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>

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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    alt={res.name}
                  />
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-1.5">
                    <span className="text-orange-500 text-lg">⭐</span>
                    <span className="font-bold text-sm tracking-widest">
                      {res.rating}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                    📍 {res.city}
                  </span>
                  <h4 className="text-2xl font-black mb-4 group-hover:text-orange-500 transition-colors">
                    {res.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed italic">
                    "{res.description}"
                  </p>
                  <button className="w-full py-4 bg-black hover:bg-orange-500 text-white hover:text-white rounded-2xl font-extrabold transition-all duration-300 shadow-lg active:scale-95">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="bg-white rounded-3xl p-8 mt-16">
          <div className="bg-white hidden md:flex gap-10 items-center font-medium text-sm uppercase tracking-widest text-gray-400">
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/all.png" alt="all" />
              all restaurants
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/near.png" alt="" />
              Nearby
            </a>
            <a href="#" className="text-white border-b-2 0 pb-1">
              <img src="/diskon.png" alt="" />
              Discount
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/bestseler.png" alt="" />
              best seller
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/deliveri.png" alt="" />
              Delivery
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/launch.png" alt="" />
              Lunch
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/5 px-6 md:px-16 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="text-3xl text-black tracking-tighter">
                Recommended<span className="text-black font-extrabold"></span>
              </h1>
            </div>
            <div className="flex items-center gap-4 left-0  mb-6">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm font-bold transition-all transform active:scale-95 shadow-lg shadow-orange-500/20">
                see all
              </button>
            </div>
          </div>
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
            <a href="#" className="text-white border-b-2 pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
            <a href="#" className="text-white border-b-2 pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
            <a href="#" className="text-white border-b-2  pb-1">
              <img src="/CardRestaurant.png" alt="all" />
            </a>
          </div>
          {/* Empty State */}
          {!loading && filteredRestaurants.length === 0 && (
            <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
              <span className="text-6xl block mb-4">🍽️</span>
              <p className="text-xl text-gray-500">
                No restaurants found for "
                <span className="text-white">{searchQuery}</span>"
              </p>
            </div>
          )}
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-black py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            {/* <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
                </div> */}
            <img src="/Logo.png" alt="logo" />
            <h4 className="text-xl font-black">Foody.</h4>
          </div>
          <p className="text-gray-600 text-sm max-w-sm mx-auto mb-10">
            The best way to find your next meal. Explore restaurants with ease
            and comfort.
          </p>
          <div className="flex justify-center gap-8 text-gray-500 text-xs uppercase tracking-widest mb-10">
            <a href="#" className="hover:text-orange-500">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-500">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-500">
              Facebook
            </a>
          </div>
          <div className="text-[10px] text-gray-800 tracking-[0.5em] uppercase">
            © 2026 Developed by Teddy • Challenge 9
          </div>
        </div>
      </footer>
    </div>
  
  
} 
export default App;
