import React from "react"

function Badge(props) {
    const faIcon = "fas fa-1x " + props.faIcon
    return(
        <div className="control">
            <div className="tags has-addons">
                <span className="tag is-white">{props.text}</span>
                {props.faIcon && <span className="tag is-dark">
                    <i className={faIcon}></i>
                </span>}
            </div>
        </div>
    )
}

export default Badge