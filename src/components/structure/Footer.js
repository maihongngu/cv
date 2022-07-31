import React from "react"

function Footer() {
    return (
        <footer className="footer" style={{background:'transparent'}}>
            <div className="content has-text-centered has-text-white container">
                <i>
                    <sup><i className="fas fa-quote-left"></i></sup>
                    So many books, so little time. 
                    <sup><i className="fas fa-quote-right"></i></sup>
                    &nbsp; <sub>- &nbsp; Frank Zappa </sub>
                </i>
                <p className="has-text-grey-light">
                    © {new Date().getFullYear()} Mai Hong Ngu
                </p>
            </div>
        </footer>
    )
}

export default Footer