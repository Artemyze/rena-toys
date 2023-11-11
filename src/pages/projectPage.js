import git from './../img/icons/gitHub.svg'
import { useParams } from "react-router-dom";
import { projects } from "../helpers/listProjects";

export function ProjectPage({img, title}) {
    const { index } = useParams()
    const project = projects[index]
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>Skills: React, Node.js, MongoDB</p>
                        </div>

                        <img src={git} alt=""/>
                        <a href="#!" className="btn-outline">
                            GitHub repo
                        </a>

                </div>
            </div>
        </main>
    )
}
