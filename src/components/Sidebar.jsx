import { NavLink, Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  // Style untuk link navigasi aktif & non-aktif
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold uppercase transition-all ${
      isActive
        ? "bg-black text-[#FFE000] shadow-sm border-l-4 border-[#FFE000]"
        : "text-gray-700 hover:bg-gray-100 hover:text-black"
    }`;

  const handleLinkClick = () => {
    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 shrink-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        {/* Header Sidebar Brand */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FFE000] text-black font-black flex items-center justify-center text-sm shadow-xs">
              SZ
            </div>
            <div>
              <span className="font-extrabold text-sm text-gray-900 tracking-tight block">
                SPORTZONE
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Admin Workspace
              </span>
            </div>
          </div>

          {/* Tombol Tutup Sidebar di Mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-500 hover:text-black p-1.5 rounded-lg hover:bg-gray-100"
            title="Tutup Menu"
          >
            ✕
          </button>
        </div>

        {/* Menu Navigasi Utama */}
        <div className="p-4">
          <span className="text-[10px] uppercase font-black tracking-wider text-gray-400 px-3 block mb-2">
            Menu Utama
          </span>

          <nav className="space-y-1.5">
            {/* Navigasi Dashboard */}
            <NavLink
              to="/admin/dashboard"
              onClick={handleLinkClick}
              className={navLinkStyle}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Dashboard</span>
            </NavLink>

            {/* Navigasi About */}
            <NavLink
              to="/admin/about"
              onClick={handleLinkClick}
              className={navLinkStyle}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tentang Kami</span>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Bagian Bawah Sidebar */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold uppercase text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Kembali ke Toko</span>
        </Link>
      </div>
    </aside>
  );
}