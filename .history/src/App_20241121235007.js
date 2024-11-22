import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 定义两个路由 */}
        <Route path="/" element={<StatusPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
