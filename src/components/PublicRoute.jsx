import { useContext } from "react";
import { AuthContext } from "../shared/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const PublicRoute = () => {
  const { isLogin, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <BeatLoader />;
  }

  if (isLogin) {
    alert("로그인 한 유저는 접근 할 수 없는 페이지입니다!");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
