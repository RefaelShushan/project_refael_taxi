import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Header1 from "./header/Header1";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div>
      <Header1 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
