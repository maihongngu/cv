import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <p className="heading">{props.position}</p>
        <h1 className="title is-4 has-text-white">
          <a href={props.website} className="has-text-white">{props.company}</a>
        </h1>
        <p style={{maxWidth: '25em'}}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem