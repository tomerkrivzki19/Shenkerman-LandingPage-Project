import React, { useEffect } from "react";
import videoBg from "./assets/shorter-wedding-video-two.mp4";
import { IoIosArrowDown } from "react-icons/io";

import Commercial from "./components/Commercial";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Commercial />
      <Nav />
      <div className="video-container">
        <div className="content-container">
          <h2>THIS IS MAIN TOPIC BLABLALBA.</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="scrool-down-btn">
          <div class="textWrapper">
            <div class="originalText">
              <a id="textStyle">
                <IoIosArrowDown />
              </a>
            </div>
            <div class="replacementText">
              <a href="#sectionID" id="textStyle" className="scroll">
                Scroll Down
              </a>
            </div>
          </div>
        </div>
        <div className="video-content">
          <video src={videoBg} autoPlay loop muted playsInline />
        </div>
      </div>

      <div className="main-content-container">
        <div className="client-about-container">
          <div className="client-image-container">
            <img
              src="https://images.squarespace-cdn.com/content/v1/568429b7c647addb5746fafe/425738c3-fe46-4019-912f-f81e9bb997a2/Hearnes-Moab-Utah-Elopement-Photographers-5.jpg?format=750w"
              alt=""
            />
          </div>
          <div className="client-about-lorem-container" id="sectionID">
            <h4 className="hebrew">קצת עליי:</h4>
            <p className="hebrew">היי אני <b>אור שנקרמן</b>, חושף לכם את חיי היומיום שמתמלאים ב<b>נסיעות</b>, <b>צילום</b>, ורגעים שמתמשכים ל<b>סיפורים מדהימים</b>. אני בן 24, אני <b>צלם חתונות עצמאי</b> מתל אביב. העבודה שלי היא לא רק עיסוק; זו החירות האישית שאני מוצא בכל <b>צילום חדש</b>.</p>
            <br />
<p className="hebrew">אני לא יכול שלא להתמסר ל<b>עולם</b> ולא לשתף את ה<b>חוויות המדהימות</b> שאני חווה במסעות שלי. כל פינה חדשה, כל ים והר, הם בשבלי לוחות <b>ציור חדשים</b> ל<b>סיפורים</b> שאני מצלם. אני מאמין שיש משהו <b>ייחודי</b> בכל <b>מקום</b>, והמשימה שלי היא ל<b>לכוד</b> את ה<b>יופי</b> שבזמן שהוא קיים.</p>
<br />
<p className="hebrew">כ<b>צלם</b>, התפקיד שלי הוא לא רק ל<b>צלם</b>; זה גם ל<b>ספר סיפור</b>. אני יודע ל<b>התאים</b> את ה<b>סגנון</b> שלי ל<b>אירוע</b>, ל<b>נווט</b> בקלות מ<b>סגנון</b> ל<b>סגנון</b> יחודי , כי כל <b>חתונה</b> היא <b>ייחודית</b>, וה<b>סיפור</b> צריך ל<b>התאים</b> אליה.</p>
<br />
<p className="hebrew">ואז יש עוד משהו שאני מצלם דרכו וזה <b>רחפנים</b>. השילוב שלי בין <b>טכנולוגיה</b> ו<b>אהבה</b> ל<b>הרפתקאות</b> מוביל ל<b>צילומים מאוויר</b> שהם פשוט <b>מדהימים</b>. אני יודע להוסיף קצת <b>גוון</b> ו<b>דרמה</b> לתיק ה<b>עבודות</b> שלי.</p>
<br />
<p className="hebrew">אני לא רק <b>צלם</b>. אני <b>סופר חזוני</b> שמבין את ה<b>חשיבות</b> של כל <b>רגע</b>. כשאני מצלם, אני בעצם יוצר <b>סיפור מתמיד</b>, של <b>אהבה</b>, <b>שמחה</b>, ו<b>חגיגה</b>. זה לא פשוט <b>צילומים</b>; זה אמנות, זה ה<b>סיפור</b> שלך בכל <b>תמונה</b>. אז אם אתה מחפש <b>צלם חתונות</b> שמבין את ה<b>אמנות</b> וגם יודע ל<b>השתמש</b> ב<b>טכנולוגיה</b> בצורה ייחודית, אתה במקום הנכון. אני כאן, אני <b>אור שנקרמן</b>, ואני מזמין אותך להיות חלק מה<b>סיפור</b>.</p>

          </div>
        </div>

        <svg class="section-divider" viewBox="0 0 1920 60" aria-hidden="true">
          <path
            data-theme="softSecondary"
            fill="var(--color-bg)"
            d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z"
          />
        </svg>

        <div className="client-projects-contaier">
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/8821dc83-17ef-419b-abef-d585c0d7a51b.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x853q85/1ec4fbaa-f965-426f-b932-d3c4156aabde.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/c86791c3-9838-4f48-b4e8-45a459251474.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/aa7168ef-13ea-4b15-822d-1d9cdef607fc.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/7f788356-be20-418a-adea-79e3f1738b71.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/efcb4ec7-369a-4414-9039-e86207dfeb2c.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x1251q85/9eb20f11-0a44-4b63-8190-16f267491c62.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/1280x854q85/635f0262-9a4c-48ad-9238-4aae62bdd372.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/720x900q85/c8b31d5d-a18e-487b-842d-d43ccbb1ca78.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/26f2daa3-8e6f-414c-9156-8368fc66e30d.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/c1f48f77-e2f5-4514-a9c5-26b9d79e39c9.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/1dd9d554-c965-4ec1-840a-a77e9bcad5cf.jpg"
            alt=""
          />
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/70cc3e62-fa06-442d-b1e5-7765eed9e166.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/d393d7b9-2d7d-4882-93bc-39dd8d8bcd8c.jpg"
            alt=""
          />{" "}
          <img
            src="https://assets.picflow.io/images/resized/640x960q85/67c94eed-7bcf-46e5-a3aa-27c39ef08029.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
