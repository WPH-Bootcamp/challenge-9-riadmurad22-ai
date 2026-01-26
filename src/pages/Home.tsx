import { useSelector } from "react-redux";
import { useMenus } from "../services/queries/useMenus";
import { ProductCard } from "../components/ProductCard";
import type { RootState } from "../features/store";

const Home = () => {
  const { category, search } = useSelector((state: RootState) => state.filters);
  const { data: menus, isLoading, isError } = useMenus(category, search);

  if (isLoading)
    return <div className="p-20 text-center">Menyiapkan meja... 🍽️</div>;
  if (isError)
    return (
      <div className="p-20 text-center text-red-500">
        Koneksi ke dapur terputus.
      </div>
    );

  const displayMenus = Array.isArray(menus) ? menus : [];

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Menu Hari Ini</h1>
      </header>

      {displayMenus.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Belum ada menu yang bisa ditampilkan.
          <br /> Coba cek tab Network di F12.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayMenus.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
