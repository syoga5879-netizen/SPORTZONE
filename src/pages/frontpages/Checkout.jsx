import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Data Alamat Sederhana
  const [form, setForm] = useState({
    name: "Gede Yoga Saputra",
    phone: "082236068796",
    address: "Jl. Raya Kloncing, Desa Sinabun",
    payment: "BCA Virtual Account",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Hitung total harga
  const subtotal = cart.reduce((sum, item) => {
    const numPrice = typeof item.price === "number" 
      ? item.price 
      : Number(String(item.price).replace(/[^\d]/g, "")) || 0;
    return sum + numPrice * (item.qty || 1);
  }, 0);

  const ongkir = cart.length > 0 ? 20000 : 0;
  const total = subtotal + ongkir;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-white border-2 border-[#FFE000] rounded-xl text-center shadow-sm">
        <div className="w-16 h-16 bg-[#FFE000] text-black font-extrabold text-3xl rounded-full flex items-center justify-center mx-auto mb-4">
          ✓
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Pesanan Berhasil!</h2>
        <p className="text-sm text-gray-600 mb-6">
          Terima kasih telah berbelanja di SPORTZONE. Pesanan Anda segera dikirim ke{" "}
          <span className="font-semibold">{form.address}</span>.
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full py-2.5 bg-[#FFE000] text-black font-bold rounded-lg hover:bg-yellow-400 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-2.5 h-6 bg-[#FFE000] rounded-sm inline-block"></span>
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kolom Form Alamat & Pembayaran */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
          {/* Alamat Pengiriman */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">
              Alamat Pengiriman
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nama Penerima
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FFE000]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FFE000]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Alamat Lengkap
                </label>
                <textarea
                  rows="2"
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#FFE000]"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 border-b pb-2">
              Metode Pembayaran
            </h2>

            <div className="space-y-2">
              {["BCA Virtual Account", "QRIS / E-Wallet", "COD (Bayar di Tempat)"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition ${
                    form.payment === method
                      ? "border-[#FFE000] bg-yellow-50/40"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={form.payment === method}
                      onChange={() => setForm({ ...form, payment: method })}
                      className="accent-black"
                    />
                    <span className="text-sm font-medium text-gray-800">{method}</span>
                  </div>
                  {form.payment === method && (
                    <span className="text-xs font-bold text-black bg-[#FFE000] px-2 py-0.5 rounded">
                      Pilihan
                    </span>
                  )}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={cart.length === 0}
            className={`w-full py-3 rounded-lg font-bold text-sm uppercase transition shadow-sm ${
              cart.length === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FFE000] hover:bg-yellow-400 text-black cursor-pointer"
            }`}
          >
            Bayar Sekarang
          </button>
        </form>

        {/* Kolom Ringkasan Belanja */}
        <div className="bg-white border rounded-xl p-5 shadow-sm h-fit space-y-4">
          <h2 className="text-base font-bold text-gray-900 border-b pb-2">
            Ringkasan Pesanan
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-xs text-gray-500 text-center py-4">Keranjang kosong</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <div>
                    <p className="font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                    <p className="text-gray-500">{item.qty}x</p>
                  </div>
                  <span className="font-bold text-black">
                    Rp{(
                      (typeof item.price === "number"
                        ? item.price
                        : Number(String(item.price).replace(/[^\d]/g, "")) || 0) * (item.qty || 1)
                    ).toLocaleString("id-ID")}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="border-t pt-3 space-y-1.5 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-black">Rp{subtotal.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span>Ongkos Kirim</span>
              <span className="font-semibold text-black">Rp{ongkir.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-black pt-2 border-t">
              <span>Total</span>
              <span className="text-[#c9af00] font-black text-base">
                Rp{total.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
