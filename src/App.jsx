import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PizzaDetails from "./pages/PizzaDetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext";
import { UserProvider, useUser } from "./context/UserContext"; 
import ProtectedRoute from "./components/ProtectedRoute";     

export default function App() {
  return (
    <UserProvider>
      <PizzasProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/pizza/:id" element={<PizzaDetails />} />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <AuthGate redirectTo="/">
                  <Login />
                </AuthGate>
              }
            />
            <Route
              path="/register"
              element={
                <AuthGate redirectTo="/">
                  <Register />
                </AuthGate>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </PizzasProvider>
    </UserProvider>
  );
}

function AuthGate({ children, redirectTo = "/" }) {
  const { token } = useUser(); // 👈 ahora sí existe
  if (token) return <Navigate to={redirectTo} replace />;
  return children;
}
