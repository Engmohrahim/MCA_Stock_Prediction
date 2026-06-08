import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";
import Prediction from "./pages/Prediction";
import MainLayout from "./layouts/MainLayout";

function LayoutWrapper({ Component }: any) {
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<LayoutWrapper Component={Dashboard} />} />
        <Route path="/stocks" element={<LayoutWrapper Component={Stocks} />} />
        <Route path="/portfolio" element={<LayoutWrapper Component={Portfolio} />} />
        <Route path="/reports" element={<LayoutWrapper Component={Reports} />} />
        <Route path="/prediction" element={<LayoutWrapper Component={Prediction} />} />
      </Routes>
    </BrowserRouter>
  );
}
