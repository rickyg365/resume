import "./Projects.css";
import Project from "./project/Project";

function Projects(props) {
    // props.projects
    let project_list = props.projects.map((project, index) => {
        return <Project {...project} key={index}></Project>;
    });

    return (
        <div className="project-container" contentEditable="true">
            <div className="title-bar">
                <h2 className="title">Projects</h2>
                <hr className="style-one" />
            </div>
            <div className="projects">{project_list}</div>
        </div>
    );
}

export default Projects;
