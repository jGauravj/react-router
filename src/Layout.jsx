import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

const Layout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
