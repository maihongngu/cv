import React from "react"
import NavBar from "./Navbar"
import Resume from "../../resume.json"

const Hero = () => {
    return (
        <section className="hero is-fullheight has-bg-image">
            <div className="hero-head">
                <NavBar />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-white">I'm a</p>
                    <h1 className="title has-text-white">{Resume.basics.label}</h1>
                    <h2 className="subtitle has-text-white">{Resume.basics.location.region}, {Resume.basics.location.country}</h2>
                    <a href={Resume.basics.cv}>
                        <button className="btn btn-5 btn-5a icon-cart">
                            
                                <span>Download</span>   
                        </button> 
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero