import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      {/* Backdrop Overlay untuk Mobile saat Sidebar terbuka */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs transition-opacity"
        ></div>
      )}

      {/* Sidebar Navigasi Admin */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Admin */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3.5 flex justify-between items-center shadow-xs shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700"
              title="Buka Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#FFE000] rounded-sm hidden sm:inline-block"></span>
              <h1 className="font-extrabold text-base md:text-lg text-gray-900 tracking-tight">
                SPORTZONE <span className="text-gray-400 font-medium text-xs md:text-sm">/ Panel Admin</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tombol Cepat Kembali ke Toko */}
            <Link
              to="/"
              className="px-3.5 py-1.5 bg-[#FFE000] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>🏪</span>
              <span className="hidden sm:inline">Lihat Toko</span>
            </Link>

            {/* Profil Admin */}
            <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-black text-[#FFE000] font-black text-xs flex items-center justify-center">
                AD
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-gray-800 block leading-tight">Admin Yoga</span>
                <span className="text-[10px] text-green-600 font-semibold">Online</span>
              </div>
            </div>
          </div>
        </header>

        {/* Konten Halaman Admin */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50">
          <Outlet />
        </main>

        {/* Footer Admin */}
        <footer className="bg-white border-t border-gray-200 py-3 px-6 text-center text-xs text-gray-500 shrink-0 flex justify-between items-center">
          <span>© 2026 SPORTZONE Admin App</span>
          <span className="text-gray-400">Versi 1.0.0</span>
        </footer>
      </div>
    </div>
  );
}
