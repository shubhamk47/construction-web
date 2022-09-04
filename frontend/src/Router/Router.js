import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Gallery from "../components/Pages/Gallery";
import ProductPage from "../components/Template/ProductPage";

export default function Router() {
  return (
    <div className="Router">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/site/:id" />
        <Route exact path="/abc" element={<ProductPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}
