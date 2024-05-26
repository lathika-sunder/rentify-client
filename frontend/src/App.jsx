import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { AuthProvider } from "./components/LoginHelper/Authprovider";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import SellProperty from "./pages/SellProperty/SellProperty";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/sell-property" element={<SellProperty />} />
          <Route exact path="/dashboard/seller" element={<SellerDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
