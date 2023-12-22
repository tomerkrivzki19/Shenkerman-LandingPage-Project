import React, { useEffect, useState } from "react";

function Nav() {
  const [state, setState] = useState(false);
  console.log(state);
  useEffect(() => {
    const disableScrolling = () => {
      const body = document.body;
      if (state === false) {
        body.style.overflow = "auto";
        return;
      } else {
        body.style.overflow = "hidden";
        return;
      }
    };
    disableScrolling();
  }, [state]);

  return (
    <>
      <div id="container">
        <div id="menuToggle">
          <input type="checkbox" onClick={() => setState(!state)} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/Contact">
              <li>Contact</li>
            </a>
            <a href="/Projects">
              <li>Projects</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
