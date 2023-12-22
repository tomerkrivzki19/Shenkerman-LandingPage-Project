import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="lorem-container">
          <a
            id="herf"
            href="https://www.instagram.com/or.shenk/"
            target="_blank"
          >
            <p className="hoverMe">בקרו אותנו באינסטגרם</p>
          </a>
          <a href="/Contact" id="herf">
            <p className="hoverMe">השאירו פרטים ונחזור אליכם</p>
          </a>
        </div>
        <div className="icons-container">
          <a
            id="herf"
            href="https://www.instagram.com/or.shenk/"
            target="_blank"
          >
            <p>
              <FaInstagram />
            </p>
          </a>

          <a
            id="herf"
            href="https://www.tiktok.com/@or.shenk
              "
            target="_blank"
          >
            <p>
              <FaTiktok />
            </p>
          </a>
          <a
            id="herf"
            href=" https://www.youtube.com/@orshenk9591"
            target="_blank"
          >
            <p>
              <FaYoutube />
            </p>
          </a>
        </div>
        <div className="copyright">
          <span>&copy; Copyright 2023 or shenkerman.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
