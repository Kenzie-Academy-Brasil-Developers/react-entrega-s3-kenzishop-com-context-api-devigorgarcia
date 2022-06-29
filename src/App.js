import { ProductListProvider } from "./Contexts/productList";
import { HomePage } from "./Page/Home";
import { Routes, Route, Link } from "react-router-dom";
import { CartPage } from "./Page/Cart";
import { CartProvider } from "./Contexts/cart";
function App() {
  return (
    <ProductListProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </ProductListProvider>
  );
}

export default App;
