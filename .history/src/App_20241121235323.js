import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatusPage from "./pages/StatusPage"; // 确保路径和后缀正确
import OrderDetailsPage from "./pages/OrderDetailsPage";

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
