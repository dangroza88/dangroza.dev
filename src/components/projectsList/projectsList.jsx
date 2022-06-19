import "../projectsList/projectsList.css"
import Project from "../project/project"
import { projects } from "../../data"


const ProjectList = () =>{
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam debitis optio nam architecto doloremque labore aliquam in eaque enim consequatur, vel deserunt praesentium dolore animi iure, quod qui ipsa provident.
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item=>(
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
                
                
            </div>
        </div>
    )
}

export default ProjectList