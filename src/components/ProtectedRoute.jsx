import { useContext } from "react";
import { AuthContext } from "../shared/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ProtectedRoute = () => {
  const { isLogin, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <BeatLoader />;
  }

  if (!isLogin) {
    alert("로그인한 사용자만 접근이 가능합니다!");
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
