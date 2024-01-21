import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="video-container">
        <div className="content-container">
          <h2>CONTACT</h2>
          <p></p>
        </div>
        <div className="image-projects-content">
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/7ba931cc-5cb7-4c25-ac65-24eefe97a067.jpg"
            alt=""
          />
          ;{" "}
        </div>
      </div>

      <div className="main-content-projects-container">
        {/* <div className="contact-container-lorem"> */}
        <h3>דברו איתי</h3>
        <p>
          שאלות ?
          <br />
          מוכנים להתחיל במסע הוויזואלי שלכם ?
          <br /> אני כאן ומתרגש להתחבר !
          <br /> בין אם אתם מתכננים חתונה, יש לכם שאלות על שירותי הצילום שלי, או
          פשוט רוצים לשתף איתי את סיפור החיים שלכם, אני כמובן כאן לשיחה.
          <br />
          <br />
          אני מאמין בכוח של קשרים אישיים, ואני מתרגש לשמוע מכם. בואו נדבר על
          החזון שלכם, על הרגעים המיוחדים שלכם, ואיך אנו יכולים לשתף פעולה כדי
          ליצור זיכרונות דרך עדשת המצלמה.
          <br />
          <br />
          השאירו לי הודעה למטה, ונתחיל את השיחה.
          <br /> מחכה לצלם את הסיפור שלכם!
        </p>{" "}
        <div className="mail">
          <a href="mailto:Shenk1337@gmail.com" id="herf" className="hoverMe">
            {" "}
            שלחו מייל וניצור קשר
          </a>
        </div>
        <div className="large-image">
          <img
            className="large"
            src="https://assets.picflow.io/images/resized/480x320q85/635f0262-9a4c-48ad-9238-4aae62bdd372.jpg"
            alt=""
          />{" "}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
