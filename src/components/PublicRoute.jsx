import { useContext } from "react";
import { AuthContext } from "../shared/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    alert("로그인 한 유저는 접근 할 수 없는 페이지입니다!");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
