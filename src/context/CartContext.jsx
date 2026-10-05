import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Tambah produk ke keranjang
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Ubah jumlah item
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  // Hapus satu item dari keranjang
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Kosongkan seluruh keranjang (digunakan setelah transaksi selesai)
  const clearCart = () => {
    setCart([]);
  };

  // Hitung total jumlah barang
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  // Hitung total harga belanjaan
  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = typeof item.price === "number" ? item.price : Number(item.price) || 0;
    return sum + numericPrice * item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook dengan pengaman error
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus digunakan di dalam <CartProvider>");
  }
  return context;
};