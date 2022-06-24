import "../projectsList/projectsList.css"
import Project from "../project/project"
import { projects } from "../../data"
import cbox from "../img/cbox.png"


const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects and samples.</h1>
                <p className="pl-desc">
                It is mostly boilerplate projects that are not finalized. I do not feel that they are accurate representations but it will give you a sense of the technologies that i work with frequently. 
                </p>
            </div>
            <div className="pl-list">
                {projects.map(item => (
                    <Project key={item.id} img={item.img} link={item.link} title={item.title} description={item.description} />
                ))}


            </div>
        </div>
    )
}

export default ProjectList