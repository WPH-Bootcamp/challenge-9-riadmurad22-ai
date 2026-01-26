import type { MenuItem } from "../types";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlices";
import { Plus } from "lucide-react";

export const ProductCard = ({ item }: { item: MenuItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
          <span className="bg-orange-50 text-orange-600 text-xs font-bold px-2 py-1 rounded">
            ★ {item.rating}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-orange-600 font-bold text-lg">
            Rp {item.price.toLocaleString("id-ID")}
          </span>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-xl transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
