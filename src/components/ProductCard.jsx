import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  if (!p) {
    return null;
  }

  return (
    
    
    <div key={p.id} className="border rounded-lg p-3 shadow hover:shadow-lg flex gap-0 flex-col">
      <img
        src={p.img}
        alt={p.name}
        className="min-w-8 h-65 object-cover mb-4"
      />
      <h2 className="font-semibold">{p.name}</h2>
      <p className="text-gray-600">{p.price}</p>

      <Link
        to={`/product/${p.slug}`}
        state={p}
        className="text-[#FFE000] hover:underline mt-2 block"
      >
        Lihat Detail
      </Link>

      <button
        onClick={() => addToCart(p)}
        className="mt-3 px-4 bg-[#FFE000] text-black rounded-lg hover:bg-[#FFD700] items-center gap-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
