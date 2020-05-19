import React from "react";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import CartLink from "../../components/CartLink/CartLink";

export default ({ children }) => {
  return (
    <div className="Layout">
      <nav>
        <Logo />
        <Nav />
        <CartLink />
      </nav>
      <main>{children}</main>
    </div>
  );
};
