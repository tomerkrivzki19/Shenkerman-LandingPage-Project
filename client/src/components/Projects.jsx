import React from "react";
import Nav from "./Nav";
// main image
import bgimage from "../assets/shenk-5.jpg";
// large image
import mainImageOne from "../assets/reka/or shenkerman x Atlas @or.shenk-4-2.jpg";
import mainImageTwo from "../assets/reka/bigImageOne-.jpg";
// small images
import colaz1 from "../assets/ragil/colaz1.jpg";
import DSC00036 from "../assets/ragil/DSC00036.jpg";
import DSC01314 from "../assets/ragil/DSC01314.jpg";
import DSC02179 from "../assets/ragil/DSC02179.jpg";
import DSC04303 from "../assets/ragil/DSC04303.jpg";
import DSC06434 from "../assets/ragil/DSC06434.jpg";
import DSC06514 from "../assets/ragil/DSC06514.jpg";
import DSC06867 from "../assets/ragil/DSC06867.jpg";
import DSC06927 from "../assets/ragil/DSC06927.jpg";
import DSC09719 from "../assets/ragil/DSC09719.jpg";
import DSC09930 from "../assets/ragil/DSC09930 (2).jpg";
import or1 from "../assets/ragil/or shenkerman x Atlas @or.shenk-1-2.jpg";
import orshenk22 from "../assets/ragil/or shenkerman x Atlas @or.shenk-2-2.jpg";
import colaz4 from "../assets/ragil/or shenkerman x Atlas @or.shenk-2-3.jpg";
import colaz5 from "../assets/ragil/or shenkerman x Atlas @or.shenk-3-2.jpg";
import colaz6 from "../assets/ragil/or shenkerman x Atlas @or.shenk-4-3.jpg";
import colaz7 from "../assets/ragil/or shenkerman x Atlas @or.shenk-5-2.jpg";
import colaz8 from "../assets/ragil/or shenkerman x Atlas @or.shenk-11.jpg";

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
