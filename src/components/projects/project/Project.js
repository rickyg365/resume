import "./Project.css";
function Project(props) {
    let feature_list = props.key_features.map((point, index) => {
        return (
            <li className="point-item" key={index}>
                {point}
            </li>
        );
    });

    return (
        <div className="project-container">
            <div className="first-row">
                <div className="proj-name">{props.name}</div>
                <div className="tag-1">| {props.language}</div>
                <div className="tag-2">| {props.tech}</div>
            </div>
            <div className="proj-body">
                <div className="proj-description">{props.description}</div>
                <ul className="feature-container">{feature_list}</ul>
            </div>

            <div className="proj-url">{props.url} </div>
        </div>
    );
}

export default Project;
