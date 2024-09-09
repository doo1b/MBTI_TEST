import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 px-10 bg-myPink1">
        <Link to="/">
          <span>HOME</span>
        </Link>
        <div>
          <Link to="/login"> LogIn</Link>
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
