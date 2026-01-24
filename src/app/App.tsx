import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Providers } from "../components/Providers"; // Memastikan Redux & Query aktif
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Route lainnya seperti cart dan history */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
