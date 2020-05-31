import React from "react"
import NavBar from "./Navbar"
import Resume from "../../resume.json"

const downloadCV = () => {
    window.location.href = "/images/curriculumvitae.pdf"
}

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
                    <button className="btn btn-4 btn-4a icon-arrow-right" onClick={downloadCV}>Download</button>
                </div>
            </div>
        </section>
    )
}

export default Hero