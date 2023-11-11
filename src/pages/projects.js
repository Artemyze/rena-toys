import {Project} from "../components/project/project";
import {projects} from "../helpers/listProjects";

export function Projects() {
    return (
        <main className="section">
                <ul className="projects">
                    {projects.map((project, i) => {
                        return <Project project={project} index={i}/>
                    })}

                </ul>
        </main>
    )
}
