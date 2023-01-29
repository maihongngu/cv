import React, { useEffect, useState } from "react";
import House from "../elements/decorations/House";
import { css } from "@emotion/css";
// import Resume from "../../resume.json";
// import NavBar from "../elements/Navbar";
import AboutMe from "../sections/AboutMe";

function Box() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  return (
    <section
      className={css`
        margin-top: 5rem;
        margin-bottom: 5rem;
      `}
      id="box-decoration"
    >
      <div
        className={`container is-flex `}
        style={{ justifyContent: "space-around", marginLeft: '0' }}
      >
        <div>
          <div className="hero-body">
            <div className="container">
              <AboutMe width={width} />
            </div>
          </div>
        </div>
        {width > 1025 && <House />}
      </div>
    </section>
  );
}
export default Box;
