import "./Skills.css";

function Skills(props) {
    let skill_elements = Object.entries(props.skills).map(
        ([skill, description], index) => {
            // Process Data Format a bit
            return (
                <p className="skill-container" key={index}>
                    {`${skill}: `}
                    <span className="skill-description">{description}</span>
                </p>
            );
        }
    );
    return (
        <div className="skills-container" contentEditable="true">
            <div className="title-bar">
                <h2 className="title">Skills & Abilities</h2>
                <hr className="style-one" />
            </div>
            {skill_elements}
        </div>
    );
}

export default Skills;
