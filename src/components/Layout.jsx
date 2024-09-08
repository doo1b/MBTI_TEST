import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 px-10 bg-myRed">
        <Link to="/">
          <span>HOME</span>
        </Link>
        <div>
          <Link to="/login"> LogIn</Link>
        </div>
      </header>
      <main
        className="container mx-auto"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
