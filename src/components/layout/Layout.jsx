import React from "react";
import Footer from "../landingpage/footer/Footer";
import Header from "../landingpage/header/Header";
import Section from "../landingpage/section/Section";
import Partner from "../landingpage/partner/Partner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
      <Partner/>
      <Section/>
      <Footer />
    </>
  );
};

export default Layout;
