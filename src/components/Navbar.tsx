import { Link } from "react-router-dom";
import { ShoppingCart, UtensilsCrossed, History } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store";

const Navbar = () => {
  // Mengambil jumlah item unik di cart dari Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-600 font-bold text-xl"
        >
          <UtensilsCrossed size={28} />
          <span>RestoApp</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-orange-600 font-medium transition-colors"
          >
            Menu
          </Link>
          <Link
            to="/history"
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors"
          >
            <History size={20} />
            <span>Riwayat</span>
          </Link>

          {/* Cart Icon with Badge */}
          <Link
            to="/cart"
            className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
