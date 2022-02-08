import "./ExpEntry.css";
function ExpEntry(props) {
    let point_list = props.points.map((point, index) => {
        return (
            <li className="point-item" key={index}>
                {point}
            </li>
        );
    });

    return (
        <div className="ExpEntry-container">
            <h4 className="company-title">
                {props.title},{" "}
                <span className="company-name">{props.name} | </span>{" "}
                <span className="company-date">{props.date_range}</span>
            </h4>
            <ul className="points-container">{point_list}</ul>
        </div>
    );
}

export default ExpEntry;
