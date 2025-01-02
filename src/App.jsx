import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import ProductPage from "./Pages/ProductPage";
import Sidebar from "./components/Sidebar";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";
import OrderPage from "./Pages/OrderPage";
import Analytics from "./Pages/Analytics";
import SettingPage from "./Pages/SettingPage";

const App = () => {
  const [isDarkMode,setIsDarkMode]=useState(true)
  return (
    <div className="flex h-screen text-white bg-gray-900 overflow-hidden ">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path='/settings' element={<SettingPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
