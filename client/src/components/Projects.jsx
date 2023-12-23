import React from "react";
import Nav from "./Nav";
// main image
import bgimage from "../assets/shenk-5.jpg";
// large image
import mainImageOne from "../assets/reka/or shenkerman x Atlas @or.shenk-4-2.jpg";
import mainImageTwo from "../assets/reka/bigImageOne-.jpg";
// small images

function Projects() {
  return (
    <>
      <Nav />

      <div className="video-container">
        <div className="content-container">
          <h2>MY PROJECTS</h2>
          <p></p>
        </div>
        <div className="image-projects-content">
          <img src={bgimage} alt="" />
        </div>
      </div>

      <div className="main-content-projects-container">
        <h3>קצת על הפרוייקטים</h3>
        <p>
          ברוכים הבאים למסע ויזואלי בתוך כמה מהפרויקטים האחרונים שלי, שבו כל
          תמונה מספרת סיפור ייחודי של אהבה וחגיגה. כצלם חתונות מתל אביב, אני
          שואף ללכוד את העצם של כל זוג, ליצור זיכרונות שנשמרים לדורות. בדרך זו
          אני שואף ליותר מאשר פשוט לצלם חתונות, אלא להפוך את כל פרויקט לשטח
          יצירתי של רגעים ורגשות שמתנפלים באופן ייחודי עם כל זוג. הצטרפו אלי דרך
          סיפורים ויזואליים, בהם כל תמונה היא עדות לאמנות הסיפור דרך העדשה.
        </p>{" "}
        <div className="large-image">
          <img src={mainImageOne} alt="" className="large" />
        </div>
        <img src="https://imgur.com/LzJsCP2.jpg" alt="" />{" "}
        <img src="https://imgur.com/YlWi7bc.jpg" alt="" />
        <img src="https://imgur.com/bW7r7Hq.jpg" alt="" />
        <img src="https://imgur.com/l4MkOGr.jpg" alt="" />{" "}
        <img src="https://imgur.com/WEi6seX.jpg" alt="" />{" "}
        <img src="https://imgur.com/uinvkQU.jpg" alt="" />{" "}
        <img src="https://imgur.com/gT0Kk9A.jpg" alt="" />{" "}
        <img src="https://imgur.com/YBbObNl.jpg" alt="" />{" "}
        <img src="https://imgur.com/uV7ZLt5.jpg" alt="" />{" "}
        <img src="https://imgur.com/DS2h06u.jpg" alt="" />{" "}
        <img src="https://imgur.com/UwnQN7z.jpg" alt="" />{" "}
        <img src="https://imgur.com/OfZk7YK.jpg" alt="" />{" "}
        <img src="https://imgur.com/BhqzAFW.jpg" alt="" />{" "}
        <img src="https://imgur.com/QudtCxf.jpg" alt="" />{" "}
        <img src="https://imgur.com/STMqLyH.jpg" alt="" />{" "}
        <img src="https://imgur.com/UfKq3oH.jpg" alt="" />{" "}
        <img src="https://imgur.com/exdml3A.jpg" alt="" />{" "}
        <img src="https://imgur.com/td7Nvcf.jpg" alt="" />
        <div className="large-image">
          <img src={mainImageTwo} alt="" className="large" />
        </div>
      </div>
    </>
  );
}

export default Projects;
