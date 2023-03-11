import React from "react";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/reshops/">
        <ToastContainer position="top-left" pauseOnHover={false} />
        <Header />
        <div className="name-div">
          {localStorage.getItem("name") ? (
            <>
              <div className="bold">
                <span>Hello , </span>
                {localStorage.getItem("name")}
                <i
                  className="fa fa-sign-out ml-3 cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                ></i>{" "}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
