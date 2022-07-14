/** @jsxImportSource @emotion/css */
import React from "react";
import House from "../elements/decorations/House";
import { css } from "@emotion/css";
function Box() {
  return (
    <section
      className={css`
        margin-top: 5rem;
        margin-bottom: 5rem;
      `}
      id="box-decoration"
    >
      <div className={`container is-flex ${css`justify-content: center`}`}>
        <House />
      </div>
    </section>
  );
}
export default Box;
