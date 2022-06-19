
import "./project.css"

const Project = ({img,link}) =>{
    return(
        <div className="prj">
            <div className="prj-border">
                <div className="prj-circle"></div>
                <div className="prj-circle"></div>
                <div className="prj-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="prj-img" /> 
                
            </a>
        </div>
    )
}

export default Project