import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLoyout from "./pages/AppLoyout";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="home" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLoyout />} />
      </Routes>
    </BrowserRouter></>
  )
}

export default App;