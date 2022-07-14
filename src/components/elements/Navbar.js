import React from "react"
import MenuItem from "./MenuItem"
import Resume from "../../resume.json"
import { css } from "@emotion/css";

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {showMenu: false, setColor: true};
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
        const currentState = this.state.showMenu;
        this.setState({ showMenu: !currentState});
    }

    render(){
        return(
            <nav  className={`navbar is-transparent ${css`background: transparent`}`}>
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/cv" className="navbar-item is-unselectable has-text-white">
                            {Resume.basics.name}
                        </a>
                        <span className="navbar-burger burger has-text-white" onClick={this.handleMenuClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div className={' navbar-menu nav-menu ' + (this.state.showMenu ? 'is-active' : null)}>
                        <div className="navbar-end " onClick={this.handleMenuClick}>
                            <MenuItem
                                text = "About Me"
                                href = "#aboutMe"
                                color = {!this.state.showMenu ? "has-text-white" : "has-text-black"}
                            />
                            <MenuItem
                                text = "Skills"
                                href = "#skills"
                                color = {!this.state.showMenu ? "has-text-white" : "has-text-black"}
                            />
                            <MenuItem
                                text = "Experience"
                                href = "#experience"
                                color = {!this.state.showMenu ? "has-text-white" : "has-text-black"}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }    
}

export default NavBar