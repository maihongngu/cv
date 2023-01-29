import React from "react";
import Badge from "../elements/Badge";
import SocialMedia from "../elements/SocialMedia";
import Resume from "../../resume.json";
import { css } from "@emotion/css";

function AboutMe(props) {
  return (
    <section className="section" id="aboutMe">
      <div
        className={` ${
          props.width > 1025
            ? css`
                width: 55%;
              `
            : css`
                width: 95%;
              `
        } `}
      >
        <p className="subtitle is-1 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        {/* <figure className="image container is-128x128" style={{marginBottom: "10px"}}>
          <img
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded avatar-cyperpunk"
          />
        </figure> */}

        <p className="subtitle is-3 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>

        <p
          className={`${css`
            margin-top: 1rem !important;
            margin-bottom: 0rem !important;
          `} subtitle is-5 has-text-white has-text-weight-light summary-text my-2`}
        >
          Skills
        </p>
        <div
          className={`${css`
            margin-top: 1rem !important;
            margin-bottom: 0rem !important;
          `}`}
        ></div>
        <div className="container interests summary-text">
          <div className="field is-grouped is-grouped-multiline has-text-centered ">
            {Resume.skills.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
        <div
          className={`${css`
            margin-top: 1rem !important;
            margin-bottom: 0rem !important;
          `}`}
        ></div>
        <p
          className={`${css`
            margin-top: 1rem !important;
            margin-bottom: 0rem !important;
          `} subtitle is-5 has-text-white has-text-weight-light summary-text my-2`}
        >
          Check out my
        </p>
        <div className={`container interests ${css`margin-top: 1rem;margin-bottom: 1rem`}`}>
          <div className="field is-grouped is-grouped-multiline has-text-centered ">
            {Resume.basics.profiles.map((value, index) => {
              return (
                <SocialMedia
                  key={index}
                  text={value.socialmedia}
                  url={value.urlSocialMedia}
                  faIcon={value.x_icon}
                />
              );
            })}
          </div>
        </div>
        <p
          className={`${css`
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
          `} subtitle is-5 has-text-white has-text-weight-light summary-text my-2`}
        >
          Hoobies
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
            {Resume.interests.map((value, index) => {
              return (
                <Badge key={index} text={value.name} faIcon={value.x_icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
