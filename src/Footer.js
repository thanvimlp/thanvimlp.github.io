import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="small-footer">
      <div className="small-footer-inner">
        <div className="footer-left">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms &amp; Conditions</a>
          <span>|</span>
          <a href="#">Modern Slavery Policy</a>
        </div>
        <div className="footer-right">
          <p>Kale & Damson Ltd &copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
