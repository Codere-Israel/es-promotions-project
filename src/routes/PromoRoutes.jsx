import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage";
import PromoPage from "../components/promotions/PromoPage";

export default function PromoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:promo" element={<PromoPage />} />
    </Routes>
  );
}
