import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatusPage from "./pages/StatusPage.tsx"; // 确保路径和后缀正确
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StatusPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
