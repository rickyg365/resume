import ExpEntry from "./ExpEntry/ExpEntry";
import "./ExperienceS.css";

function ExperienceS(props) {
    let exp_items = props.experience.map((exp, index) => {
        return <ExpEntry {...exp} key={index}></ExpEntry>;
    });
    return (
        <div className="experience-container">
            <div className="title-bar">
                <h2 className="title">Experience</h2>
                <hr className="style-one" />
            </div>
            <div className="experience-entries">{exp_items}</div>
        </div>
    );
}

export default ExperienceS;
