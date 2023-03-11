import React from "react";
import { useNavigate } from "react-router";
import "./footer.css";

function Footer() {
  const naviage = useNavigate();
  return (
    <>
      <footer className="footerDistributed">
        <div className="footerRight">
          <a href="https://www.instagram.com/ravi_nakhate_/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/RaviNakhate2?t=mbn2hpUjncbMBMd_BxPTeg&s=09"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-nakhate-a1272b1ba/"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/RaviNakhate" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>

        <div className="footerLeft">
          <p className="footerLinks">
            <a href="/">Home</a>
            {" | "}
            <a href="/cart">Cart</a>
            {" | "}
            <a
              href=""
              onClick={() => {
                localStorage.clear();
                naviage("/register");
              }}
            >
              Register
            </a>
            {" | "}
            <a
              href=""
              onClick={() => {
                localStorage.clear();
                naviage("/register");
              }}
            >
              Login
            </a>
          </p>

          <p className="footerCompany">
            Reshops &copy; 2023 | Ravi D. Nakhate | ravi165528@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
