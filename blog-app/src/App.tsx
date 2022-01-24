import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/Main";
import Home from "./pages/home/Index";
import Articles from "./pages/articles/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout component={<Home />} />} />
      <Route
        path="/articles"
        element={<MainLayout component={<Articles />} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
