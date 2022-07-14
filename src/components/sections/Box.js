/** @jsxImportSource @emotion/css */
import React from "react";
import House from "../elements/decorations/House";
import { css } from "@emotion/css";
import Resume from "../../resume.json";
import NavBar from "../elements/Navbar";
function Box() {
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
        style={{ justifyContent: "space-around" }}
      >
        <div>
          <div className="hero-body">
            <div className="container">
              <p className="subtitle is-5 has-text-white">I'm a</p>
              <h1 className="title has-text-white">{Resume.basics.label}</h1>
              <h2 className="subtitle has-text-white">
                {Resume.basics.location.region},{" "}
                {Resume.basics.location.country}
              </h2>
              <a href={Resume.basics.cv}>
                <button className="btn btn-5 btn-5a icon-cart">
                  <span>Download</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <House />
      </div>
    </section>
  );
}
export default Box;
