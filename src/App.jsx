import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accesories from "./pages/Accesories";
import Clothing from "./pages/Clothing";
import Home from "./pages/Home";
import Jersey from "./pages/Jersey";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shoes from "./pages/Shoes";
import SingleProduct from "./pages/SingleProduct";
import Sneakers from "./pages/Sneakers";
import { Toaster } from "react-hot-toast";
import MyAccount from "./pages/MyAccount";
import ScrollToTop from "./widgets/scrollToTop/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/sneakers" element={<Sneakers />} />
            <Route path="/jersey" element={<Jersey />} />
            <Route path="/accessories" element={<Accesories />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/me" element={<MyAccount />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
