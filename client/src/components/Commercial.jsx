import React, { useState } from "react";

function Commercial() {
  const [bol, setBol] = useState();
  const bolOpen = () => {
    setBol(!bol);
  };
  return (
    <div className="commarcial-container">
      <h4>
        {/* 📷 מוזמנים לבדוק את הפרוייקטים שלי - מלאו את הפרטים ותיצרו איתי קשר */}
        👆 מוזמנים לבדוק את חבילות הצילום שאני מציע
      </h4>
      <a href="#" class="close"></a>
    </div>
  );
}

export default Commercial;
