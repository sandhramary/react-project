import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

import "../../index.css";

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
