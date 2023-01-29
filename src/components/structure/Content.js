import React from "react";
// import AboutMe from "../sections/AboutMe";
// import Skills from "../sections/Skills";
// import Experience from "../sections/Experience";
// import ForeignLang from "../sections/ForeignLang";
// import PetProjects from "../sections/PetProject.js";
import Box from "../sections/Box.js";
// import Countdown from "../services/Countdown";
import NavBar from "../elements/Navbar";
import Footer from '../structure/Footer.js'
function Content() {
  return (
    <main style={{height: '100vh'}}>
      <NavBar />
      <Box />
      {/* <Skills /> */}
      {/* <ForeignLang /> */}
      <Footer />

    </main>
  );
}

export default Content;
