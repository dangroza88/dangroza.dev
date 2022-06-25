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
                Mostly boilerplate projects, that will give you a glimpse of the technologies that i've started to work with.<br/> Looking forward, determined to improve. 
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