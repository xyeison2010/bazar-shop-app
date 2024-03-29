import {BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import "./app.scss";

import { CartProvider } from "../context/CartContext";

function App() {
  return (
    <CartProvider>
      <>
        <BrowserRouter>
          <div className="app">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </CartProvider>
  );
}

export default App;
