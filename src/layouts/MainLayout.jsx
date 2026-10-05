import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
// import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div  className="flex flex-col min-h-screen">
      <Navbar />

      <header className="bg-white-100 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold uppercase">
         <NavLink
            to="/"
            className="hover:text-yellow-500 transition-colors"
          >
            Semua Produk
          </NavLink>
          <span className="text-gray-400">/</span>
         
          <NavLink
            to="/Sepatu"
            className="hover:text-yellow-500 transition-colors"
          >
            Sepatu
          </NavLink>
          <span className="text-gray-400">/</span>

          <NavLink
            to="/Pakaian"
            className="hover:text-yellow-500 transition-colors"
          >
            Pakaian
          </NavLink>
          <span className="text-gray-400">/</span>

          <NavLink
            to="/Aksesoris"
            className="hover:text-yellow-500 transition-colors"
          >
            Aksesoris
          </NavLink>
          <span className="text-gray-400">/</span>

          <NavLink
            to="/Peralatan"
            className="hover:text-yellow-500 transition-colors"
          >
            Peralatan
          </NavLink>
        </div>
        <form className="flex items-center border border-gray-300 rounded-sm overflow-hidden w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 outline-none text-sm text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button 
            className="bg-black text-white font-bold px-4 py-2 text-sm uppercase hover:bg-gray-800 transition-colors"
            onClick={handleSearch}
          >
            GO
          </button>
        </form>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2025 E-Commerce Simple App | Version 1.0</p>
      </footer>
    </div>
  );
}
