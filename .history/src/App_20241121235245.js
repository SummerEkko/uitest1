import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatusPage from "./pages/StatusPage"; // 引入 StatusPage
import OrderDetailsPage from "./pages/OrderDetailsPage"; // 引入 OrderDetailsPage

function App() {
  return (
    <Router>
      <Routes>
        {/* 路由配置 */}
        <Route path="/" element={<StatusPage />} /> {/* 默认页面 */}
        <Route path="/order-details" element={<OrderDetailsPage />} /> {/* 工单详情页面 */}
      </Routes>
    </Router>
  );
}

export default App;
