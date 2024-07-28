import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />

      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
