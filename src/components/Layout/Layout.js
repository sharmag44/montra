import HomePage from "../view/HomePage/HomeSection/HomePage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "../view/Payment/PaymentPage";
import BankingPage from '../view/Banking/BankingPage';
import LandingPage from '../view/Landing/LandingPage'
import InsurancePage from '../view/Insurance/InsurancePage'
import InvestmentPage from '../view/Investment/InvestmentPage';
import ShoppingPage from '../view/Shopping/ShoppingPage';
function Layout() {
  return (
    <div className="Layout">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/banking" element={<BankingPage />} />
          <Route path="/lending" element={<LandingPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Layout;