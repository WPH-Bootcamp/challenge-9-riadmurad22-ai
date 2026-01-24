import { useSelector } from 'react-redux';
import { useMenus } from '../services/queries/useMenus';
import { ProductCard } from '../components/ProductCard';
import type { RootState } from '../features/store';

const Home = () => {
  const { category, search } = useSelector((state: RootState) => state.filters);
  
  // Mengirim parameter filter ke API via React Query
  const { data: menus, isLoading, isError } = useMenus(
    category === 'All' ? undefined : category, 
    search
  );

  if (isLoading) return <div className="text-center py-20 font-medium">Memasak menu untukmu... 🍳</div>;
  if (isError) return <div className="text-center py-20 text-red-500">Gagal mengambil menu. Periksa koneksi internetmu.</div>;

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Explore Menu</h1>
        <p className="text-gray-500">Temukan makanan terbaik untuk harimu.</p>
      </header>

      {menus?.length === 0 ? (
        <div className="text-center py-20 text-gray-400 italic">Menu tidak ditemukan...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menus?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;