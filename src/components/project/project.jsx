
import "./project.css"

const Project = ({ img, link, title, description }) => {
    return (
        <div className="prj">
            <div className="prj-border">
                <div className="prj-circle"></div>
                <div className="prj-circle"></div>
                <div className="prj-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="prj-img" />
                <div className="overlay overlay--primary ">
                    <h1 className="overlay-title">{title}</h1>
                    <h5 className="overlay-description">{description}</h5>
                </div>
            </a>
        </div>
    )
}

export default Project