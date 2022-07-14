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
              <p
                className={`subtitle is-5 has-text-white`}
              >
                I'm a
              </p>
              <h1
                className={`title has-text-white ${css`
                  text-shadow: -0.2rem -0.2rem 1rem red, 0.2rem 0.2rem 1rem red,
                    0 0 2rem var(--neon-text-color),
                    0 0 4rem var(--neon-text-color),
                    0 0 6rem var(--neon-text-color),
                    0 0 8rem var(--neon-text-color),
                    0 0 10rem var(--neon-text-color);
                `}`}
              >
                {Resume.basics.label}
              </h1>
              <h2
                className={`subtitle has-text-white ${css`
                  text-shadow: -0.2rem -0.2rem 1rem #ffc203,
                    0.2rem 0.2rem 1rem #ffc203, 0 0 2rem var(--neon-text-color),
                    0 0 4rem var(--neon-text-color),
                    0 0 6rem var(--neon-text-color),
                    0 0 8rem var(--neon-text-color),
                    0 0 10rem var(--neon-text-color);
                `}`}
              >
                {Resume.basics.location.region},{" "}
                {Resume.basics.location.country}
              </h2>
              <a className="cyperpunk" href={Resume.basics.cv}>
                <button
                  className={`btn btn-5 btn-5a ${css`
                    line-height: 0;
                  `}`}
                >
                  Download
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
