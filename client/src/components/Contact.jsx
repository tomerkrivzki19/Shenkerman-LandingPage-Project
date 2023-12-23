import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="image-contact-container">
        <div className="content-container">
          <h2>THIS IS MAIN TOPIC BLABLALBA.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {/* <div className="scrool-down-btn">
          <i>V/scrool down</i>
        </div> */}
        <div className="image-contact-content">
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/7ba931cc-5cb7-4c25-ac65-24eefe97a067.jpg"
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
