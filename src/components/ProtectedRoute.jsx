import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
    const { token } = useUser();
    if (!token) return <Navigate to="/login" replace />;
    return children;
}