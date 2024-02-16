import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllCategories from './pages/AllCategories'
import Categories from "./Components/Categories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="/AllCategories" element={<AllCategories />}/>
        <Route path="categories/AllCategories" element={<AllCategories />}/>
        <Route path="categories/:id" element={<Categories />}/>
      </Routes>
    </>
  );
}

export default App;
