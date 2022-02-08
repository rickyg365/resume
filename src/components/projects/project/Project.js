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
            <h4 className="company-title">
                {props.name},{" "}
                <span className="company-name">{props.description} | </span>{" "}
                <span className="company-date">
                    {props.language}
                    {props.tech}
                </span>
                {props.url}
            </h4>
            <ul className="points-container">{feature_list}</ul>
        </div>
    );
}

export default Project;
