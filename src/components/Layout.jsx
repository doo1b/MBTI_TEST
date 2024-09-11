import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import { AuthContext } from "../shared/AuthContext";

const Layout = ({ children }) => {
  const { setIsLogin, isLogin } = useContext(AuthContext);

  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 px-10 bg-myPink1">
        <Link to="/">
          <span>홈</span>
        </Link>

        <div>
          <div className="flex flex-row-reverse justify-between w-60">
            {isLogin ? (
              <>
                <span
                  onClick={() => {
                    logout();
                    setIsLogin(false);
                  }}
                >
                  로그아웃
                </span>
                <Link to="/results">결과보기</Link>
                <Link to="/test">테스트</Link>
                <Link to="/profile">프로필</Link>
              </>
            ) : (
              <Link to="/login"> 로그인</Link>
            )}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center pt-24 mx-auto mb-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;
