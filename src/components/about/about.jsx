import React from "react";
import "./about.css";
import prog from "../img/prog.jpg"

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo vitae obcaecati minima numquam ratione!
                </p>
                <br />
                <p className="about-desc2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, laboriosam atque ducimus neque, culpa assumenda quod molestiae necessitatibus enim consequatur omnis dolores optio ut quidem reprehenderit eaque? Earum quos error numquam laudantium debitis dolores veritatis ad quidem corrupti! Veniam, unde?
                </p>
            </div>
        </div>
    )
}

export default About