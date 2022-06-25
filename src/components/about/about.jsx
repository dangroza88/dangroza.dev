import React from "react";
import "./about.css";
import prog from "../img/prog.jpg"
import file from "../img/file.png"
import resume from "../download/danresume.pdf"

const About = () => {
    return (
        <div className="about">
            <div className="about1">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={prog} alt="" className="about-img" />
                </div>
            </div>
            <div className="about2">
                <h1 className="about-title">About Me</h1>
                <p className="about-desc1">
                    Analytical, result-oriented professional with 9+ years of experience in banking.
                </p>
                <br />
                <p className="about-desc2">
                    Eager to launch and enhance my front-end web developer career while working in an environment that will challenge me further, allowing me to contribute to the continued growth and success of the organization.
                </p>
                <div className="download">
                    <h3 className="cv">My Resume </h3>
                    <a href={resume} download>
                        <img src={file} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About