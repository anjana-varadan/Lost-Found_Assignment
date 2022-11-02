import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/mainLayout/MainLayout';
import Home from './pages/home/Home';
import LoginForm from './pages/login/Login';
import Product from './pages/product/Product';
import AuthContext from './context/AuthContext';
import CartContext from './context/CartContext';
import Cart from './pages/cart/Cart';
import RatingContextProvider from './context/RatingContext';


function App() {
  return (
    <AuthContext>
      <CartContext>
        <RatingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RatingContextProvider>
      </CartContext>
    </AuthContext>
  );
}

export default App;
