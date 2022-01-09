import React from "react";
import "./footer.css";

export const Footer = () => {

  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%"
  }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; 2022 <a href="https://abubaker.org/">ACS</a>
      </p>
    </footer>
  );
};
