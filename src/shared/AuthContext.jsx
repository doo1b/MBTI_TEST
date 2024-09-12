import { createContext, useEffect, useState } from "react";
import { getUserProfile, logout } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // 1. 로컬 스토리지에서 토큰을 가져옴
  const token = localStorage.getItem("accessToken");

  // 2. 프로필 정보를 가져오기 위한 useQuery 설정
  const {
    data: loginUser,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserProfile(token),
    enabled: !!token,
  });

  useEffect(() => {
    if (!token) {
      setIsLogin(false);
      return; // 토큰이 없으면 로그인 상태를 false로 설정
    } else if (token) {
      if (isError) {
        alert("만료된 토큰입니다. 다시 로그인 해주세요!");
        logout();
        navigate("/login");
        return;
      }
      setIsLogin(true);
      return;
    }
  }, [token, isError]);

  return (
    <AuthContext.Provider value={{ loginUser, isLogin, setIsLogin, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
