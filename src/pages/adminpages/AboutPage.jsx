export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black uppercase text-gray-900 tracking-tight">
          Tentang SPORTZONE Admin
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Informasi sistem manajemen toko perlengkapan olahraga.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-6 shadow-xs space-y-4 text-sm text-gray-700">
        <div className="flex items-center gap-3 pb-4 border-b">
          <div className="w-12 h-12 bg-[#FFE000] text-black font-extrabold text-xl rounded-xl flex items-center justify-center">
            SZ
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              SPORTZONE E-Commerce System
            </h2>
            <p className="text-xs text-gray-500">Versi 1.0.0 Prototyping Platform</p>
          </div>
        </div>

        <p className="leading-relaxed">
          Platform manajemen admin SPORTZONE dirancang untuk mempermudah pemantauan transaksi toko, pembaruan stok produk sepatu dan pakaian olahraga, serta pengelolaan pesanan pelanggan secara cepat dan responsif.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-gray-50 rounded-xl border">
            <span className="text-xs font-bold text-gray-400 uppercase block mb-1">
              Frontend Stack
            </span>
            <p className="font-bold text-gray-900">React 19 + Tailwind CSS + Vite</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border">
            <span className="text-xs font-bold text-gray-400 uppercase block mb-1">
              Admin Role
            </span>
            <p className="font-bold text-gray-900">Super Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
