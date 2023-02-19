import React from "react";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
