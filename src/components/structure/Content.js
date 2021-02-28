import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import ForeignLang from "../sections/ForeignLang"
import PetProjects from "../sections/PetProject.js"
import Countdown from "../services/Countdown"

function Content() {
    return(
        <main>
            {/* <Countdown /> */}
            <AboutMe />
            <Skills />
            <ForeignLang />
            <Experience />
            <PetProjects />
        </main>
    )
}

export default Content