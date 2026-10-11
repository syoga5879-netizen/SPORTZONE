import { useState } from "react";
import { products as initialProducts } from "../../utils/data";

export default function AdminDashboard() {
  // State data produk (bisa ditambah/diedit/dihapus secara lokal)
  const [productList, setProductList] = useState(initialProducts);
  const [searchProduct, setSearchProduct] = useState("");

  // Modal Tambah Produk
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category_name: "Sepatu",
    price: "",
    stock: 10,
  });

  // State Pesanan Masuk
  const [orders, setOrders] = useState([
    {
      id: "ORD-SPZ-001",
      customer: "Gede Yoga Saputra",
      product: "Adizero EVO SL JRF Edition",
      total: "Rp2.500.000",
      status: "Dikirim",
      date: "11 Okt 2026",
    },
    {
      id: "ORD-SPZ-002",
      customer: "Budi Santoso",
      product: "Sepatu Basket Nike Air Zoom",
      total: "Rp3.500.000",
      status: "Diproses",
      date: "11 Okt 2026",
    },
    {
      id: "ORD-SPZ-003",
      customer: "Rian Hidayat",
      product: "Nike Windrunner Jacket",
      total: "Rp1.350.000",
      status: "Selesai",
      date: "10 Okt 2026",
    },
  ]);

  // Filter produk berdasarkan search
  const filteredProducts = productList.filter((item) =>
    item.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  // Hapus Produk
  const handleDeleteProduct = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProductList((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Tambah Produk
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const created = {
      id: Date.now(),
      name: newProduct.name,
      category_name: newProduct.category_name,
      price: newProduct.price,
      stock: Number(newProduct.stock) || 5,
      img: initialProducts[0]?.img, // Fallback gambar
    };

    setProductList([created, ...productList]);
    setShowAddModal(false);
    setNewProduct({ name: "", category_name: "Sepatu", price: "", stock: 10 });
    alert("Produk baru berhasil ditambahkan!");
  };

  // Ubah status pesanan
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black uppercase text-gray-900 tracking-tight">
            Dashboard Admin SPORTZONE
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Ringkasan performa toko, manajemen produk, dan transaksi terbaru.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-[#FFE000] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition shadow-xs flex items-center gap-2 self-start sm:self-auto"
        >
          <span className="text-base leading-none">+</span>
          <span>Tambah Produk Baru</span>
        </button>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-2xl p-5 shadow-xs">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Total Pendapatan
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-1">
                Rp28.500.000
              </h3>
            </div>
            <span className="p-2.5 rounded-xl bg-yellow-50 text-black font-bold text-sm">
              💰
            </span>
          </div>
          <span className="text-xs font-semibold text-green-600 mt-3 block">
            ↑ +12.5% dari bulan lalu
          </span>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-xs">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Total Produk
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-1">
                {productList.length} Produk
              </h3>
            </div>
            <span className="p-2.5 rounded-xl bg-yellow-50 text-black font-bold text-sm">
              👟
            </span>
          </div>
          <span className="text-xs font-semibold text-gray-500 mt-3 block">
            Katalog aktif di etalase
          </span>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-xs">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Pesanan Masuk
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-1">
                {orders.length} Pesanan
              </h3>
            </div>
            <span className="p-2.5 rounded-xl bg-yellow-50 text-black font-bold text-sm">
              📦
            </span>
          </div>
          <span className="text-xs font-semibold text-blue-600 mt-3 block">
            Perlu ditindaklanjuti
          </span>
        </div>

        <div className="bg-white border rounded-2xl p-5 shadow-xs">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                Pelanggan Terdaftar
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-1">
                1.420 Atlet
              </h3>
            </div>
            <span className="p-2.5 rounded-xl bg-yellow-50 text-black font-bold text-sm">
              👥
            </span>
          </div>
          <span className="text-xs font-semibold text-green-600 mt-3 block">
            Aktif berbelanja
          </span>
        </div>
      </div>

      {/* Bagian 1: Tabel Pesanan Terbaru */}
      <div className="bg-white border rounded-2xl p-6 shadow-xs">
        <h2 className="font-extrabold text-base uppercase text-gray-900 mb-4 flex items-center justify-between">
          <span>Pesanan Terbaru</span>
          <span className="text-xs font-bold text-[#c9af00] uppercase">
            Live Updates
          </span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-600">
            <thead className="bg-gray-50 uppercase text-[11px] font-bold text-gray-500 border-y">
              <tr>
                <th className="py-3 px-4">No. Order</th>
                <th className="py-3 px-4">Pelanggan</th>
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Ubah Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50/70">
                  <td className="py-3.5 px-4 font-bold text-gray-900">{o.id}</td>
                  <td className="py-3.5 px-4 font-semibold text-gray-800">{o.customer}</td>
                  <td className="py-3.5 px-4">{o.product}</td>
                  <td className="py-3.5 px-4 font-extrabold text-black">{o.total}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                        o.status === "Selesai"
                          ? "bg-green-100 text-green-800"
                          : o.status === "Dikirim"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={o.status}
                      onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                      className="border rounded-lg px-2 py-1 text-xs font-medium focus:outline-none focus:border-black"
                    >
                      <option value="Diproses">Diproses</option>
                      <option value="Dikirim">Dikirim</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bagian 2: Manajemen Katalog Produk */}
      <div className="bg-white border rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="font-extrabold text-base uppercase text-gray-900">
              Daftar Produk Toko ({productList.length})
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Kelola stok, harga, dan ketersediaan barang di etalase.
            </p>
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Cari nama produk..."
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              className="w-full px-3.5 py-2 border rounded-xl text-xs focus:outline-none focus:border-black"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-600">
            <thead className="bg-gray-50 uppercase text-[11px] font-bold text-gray-500 border-y">
              <tr>
                <th className="py-3 px-4">Produk</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4">Harga</th>
                <th className="py-3 px-4">Stok</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      {p.img && (
                        <img
                          src={p.img}
                          alt={p.name}
                          className="w-10 h-10 object-contain rounded-lg border bg-gray-50 p-1"
                        />
                      )}
                      <span className="font-bold text-gray-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{p.category_name || "Olahraga"}</td>
                  <td className="py-3 px-4 font-extrabold text-black">
                    Rp{p.price}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        p.stock > 5
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {p.stock || 10} unit
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="px-2.5 py-1 text-red-600 hover:bg-red-50 rounded-lg font-bold transition text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Produk */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="font-extrabold text-base uppercase text-gray-900">
                Tambah Produk Baru
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Nama Produk
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Sepatu Futsal Nike Phantom"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Kategori
                </label>
                <select
                  value={newProduct.category_name}
                  onChange={(e) => setNewProduct({ ...newProduct, category_name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-black bg-white"
                >
                  <option value="Sepatu">Sepatu</option>
                  <option value="Pakaian">Pakaian</option>
                  <option value="Aksesoris">Aksesoris</option>
                  <option value="Peralatan">Peralatan</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Harga (Rp)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 1.500.000"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Jumlah Stok
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-xl font-bold text-gray-600 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#FFE000] text-black font-extrabold uppercase rounded-xl hover:bg-yellow-400"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
