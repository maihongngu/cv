import React from "react"

function MenuItem(props) {
    return(
    <a href={props.href} className={"navbar-item is-unselectable " + props.color}>{props.text}</a>
    )
}

export default MenuItem