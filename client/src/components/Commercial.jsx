import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Commercial() {
  const [bol, setBol] = useState(true);

  // for the comaarcial effect- saved in the local storage
  useEffect(() => {
    const hideContainer = localStorage.getItem("hideContainer");

    if (hideContainer === "true") {
      const container = document.querySelector(".commarcial-container");
      if (container) {
        container.style.display = "none"; // Hide the element based on the stored state
      }
    }
  }, []);

  //   the opration to hode the container
  useEffect(() => {
    const bolOpen = () => {
      if (bol == false) {
        const container = document.getElementById("commarcial-container-close");
        console.log(container);
        container.style.display = "none"; // Hide the element
        localStorage.setItem("hideContainer", "true"); // Save state in local storage
      }
      return;
    };
    bolOpen();
  }, [bol]);
  return (
    <div className="commarcial-container" id="commarcial-container-close">
      <Link to={"/Projects"} id="commercialHeader">
        <h4 className="commercialLineThrew">
          {/* 📷 מוזמנים לבדוק את הפרוייקטים שלי - מלאו את הפרטים ותיצרו איתי קשר */}
          👆 מוזמנים לבדוק את חבילות הצילום שאני מציע
        </h4>
      </Link>
      <a href="#" class="close" onClick={() => setBol(!bol)}></a>
    </div>
  );
}

export default Commercial;
