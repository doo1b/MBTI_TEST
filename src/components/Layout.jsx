import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";

const Layout = ({ children, user, setUser }) => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setUser(true);
    }
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 px-10 bg-myPink1">
        <Link to="/">
          <span>홈</span>
        </Link>

        <div>
          {user ? (
            <div>
              <Link to="/profile">프로필</Link>{" "}
              <Link to="/test">테스트하러가기</Link>{" "}
              <span
                onClick={() => {
                  logout();
                  setUser(false);
                }}
              >
                로그아웃
              </span>{" "}
            </div>
          ) : (
            <Link to="/login"> 로그인</Link>
          )}
        </div>
      </header>
      <main
        className="flex flex-col items-center pt-24 mx-auto"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
