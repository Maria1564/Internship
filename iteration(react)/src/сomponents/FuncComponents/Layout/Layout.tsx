import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children: ReactNode
}
const Layout = ({children}: LayoutProps) => {
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
