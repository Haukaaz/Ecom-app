import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";

import CartContext from "./context/CartContext";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
