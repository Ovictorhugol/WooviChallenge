import { Routes, Route } from "react-router-dom";
import { PaymentMethod } from "../Pages/PaymentMethod";
import { PixCreditCard } from "../Pages/PixCreditCard";
import { PixCreditCardInfo } from "../Pages/PixCreditCardInfo";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PaymentMethod />} />
      <Route path="pix" element={<PixCreditCard />} />
      <Route path="payment" element={<PixCreditCardInfo />} />
    </Routes>
  );
}

export default MainRoutes;
