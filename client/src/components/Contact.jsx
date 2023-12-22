import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="video-container">
        <div className="content-container">
          <h2>THIS IS MAIN TOPIC BLABLALBA.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {/* <div className="scrool-down-btn">
          <i>V/scrool down</i>
        </div> */}
        <div className="video-content">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          {/* <image src={videoBg} autoPlay loop muted /> */}
        </div>
      </div>

      <div className="main-content-contact-container">
        <h3>בואו נדבר</h3>
        <form action="">
          <div className="first-section">
            <input type="text" placeholder="שם   " />
            <input type="text" placeholder="טלפון" />
          </div>
          <div className="secend-section">
            <input type="text" placeholder="מייל" />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>שלח</button>
        </form>
        <div className="croos-line"></div>
      </div>
    </div>
  );
}

export default Contact;
