import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Komponen Ikon SVG (Mencegah error lucide-react tidak terinstall)
const User = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Mail = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Phone = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LogOut = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

export default function Account() {
  const navigate = useNavigate();

  // Load profil dari localStorage
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("sportzone_user_profile");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      name: "Gede Yoga",
      email: "syoga@example.com",
      phone: "+62 812-3456-7890",
    };
  });

  const [notification, setNotification] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("sportzone_user_profile", JSON.stringify(profile));
    setNotification("Data profil berhasil disimpan!");
    setTimeout(() => setNotification(""), 3000);
  };

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin keluar akun?")) {
      localStorage.removeItem("sportzone_user_profile");
      alert("Berhasil keluar akun!");
      navigate("/");
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50/50 min-h-[80vh] flex items-center justify-center font-sans">
      <div className="max-w-2xl w-full mx-auto bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-[#FFE000]/60 transition-colors">
        
        {/* Header Profil Putih & Kuning */}
        <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
          <div className="w-16 h-16 rounded-full bg-[#FFE000] text-black font-extrabold flex items-center justify-center text-2xl shrink-0 shadow-md">
            GY
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900">Akun Saya</h1>
              <span className="bg-[#FFE000] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                SportZone
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">
              Kelola informasi profil akun SPORTZONE Anda
            </p>
          </div>
        </div>

        {/* Notifikasi Berhasil */}
        {notification && (
          <div className="mt-4 p-3 bg-yellow-50 border border-[#FFE000] text-yellow-900 text-sm rounded-xl flex items-center justify-between font-semibold">
            <span>✓ {notification}</span>
            <button
              onClick={() => setNotification("")}
              className="text-gray-500 hover:text-black font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Form Informasi Akun */}
        <form onSubmit={handleSave} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
              <User size={16} className="text-yellow-500" /> Nama Lengkap
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-[#FFE000] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
              <Mail size={16} className="text-yellow-500" /> Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              required
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-[#FFE000] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2">
              <Phone size={16} className="text-yellow-500" /> Nomor Telepon
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              required
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-[#FFE000] transition-colors text-sm"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="pt-4 flex items-center justify-between border-t border-gray-200 mt-6">
            <button
              type="submit"
              className="bg-[#FFE000] hover:bg-yellow-400 active:scale-95 text-black font-bold px-6 py-2.5 rounded-xl transition cursor-pointer shadow-sm text-sm"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-700 px-4 py-2.5 transition cursor-pointer font-semibold text-sm"
            >
              <LogOut size={18} /> Keluar
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
