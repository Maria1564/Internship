import React from "react";
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
  return (
    <>
    {children}
    <main className="content">
       <Outlet />
    </main>
    </>
  )
};

export default Layout;
