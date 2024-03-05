import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllCategories from './pages/AllCategories'
import Categories from "./Components/Categories";
import Nav from "./Components/Nav";
import AllProducts from "./pages/AllProducts";
import Contact from "./Components/Contact";
import ProductCard from "./Components/ProductCard";
import AllSales from "./pages/AllSales";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="/AllCategories" element={<AllCategories />}/>
        <Route path="categories/:id" element={<Categories />}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="/AllSales" element={<AllSales/>}/>
      </Routes>

      <Contact />
    </>
  );
}

export default App;
