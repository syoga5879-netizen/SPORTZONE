import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  // Mengambil cart, updateQty, removeFromCart dari context useCart
  const { cart, updateQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="p-6 text-center text-gray-600">Cart is empty</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-md"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">Rp{item.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                value={item.qty}
                min="1"
                className="w-16 border rounded text-center"
                onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
              />{" "}
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div>
          <span className="text-sm text-gray-500">Total Belanja:</span>
          <span className="text-xl font-black text-black block">
            Rp{cart.reduce((sum, item) => {
              const numPrice = typeof item.price === "number" ? item.price : Number(String(item.price).replace(/[^\d]/g, "")) || 0;
              return sum + numPrice * item.qty;
            }, 0).toLocaleString("id-ID")}
          </span>
        </div>

        <Link
          to="/checkout"
          className="px-6 py-3 bg-[#FFE000] text-black font-extrabold uppercase text-sm rounded-lg hover:bg-yellow-400 transition-colors shadow-sm flex items-center gap-2"
        >
          Lanjut ke Checkout →
        </Link>
      </div>
    </div>
  );
}
