import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { AuthProvider } from "./components/LoginHelper/Authprovider";
import Header from "./components/Header/Header";

function App() {
  return (
    <AuthProvider>
      
        <Header />
    
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
