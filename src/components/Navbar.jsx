import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo1 from "../Images/logo1.png";
import userLogo from "../Images/userLogo.png";

export default function Navbar() {
  const { totalQty } = useCart();
  const navMenuStyles = ({ isActive }) =>
    `transition-all duration-200 active:scale-95 px-2 py-1 ${
      isActive
        ? "text-[#FFE000] font-bold border-b-2 border-[#FFE000]"
        : "text-gray-600 hover:text-[#FFE000]"
    }`;

  return (
    <nav className="bg-white shadow-md px-10 py-6 flex justify-between items-center">
      <div className="text-base font-bold text-black">
        <Link to="/Account">
          <img
            src={userLogo}
            alt="Akun Saya"
            className="w-6 h-10 object-contain hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={logo1}
          alt="Logo Tengah"
          className="h-20 w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-6 text-gray-600 font-medium">
        <NavLink to="/" className={navMenuStyles}>
          Home
        </NavLink>

        <NavLink to="/cart" className={navMenuStyles}>
          Keranjang
          {totalQty > 0 && (
            <span className=" bg-red-500 text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </NavLink>

        <NavLink to="/checkout" className={navMenuStyles}>
          Checkout
        </NavLink>
      </div>
    </nav>
  );
}
