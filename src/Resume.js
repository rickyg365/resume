import "./Resume.css";
import Header from "./components/header/Header.js";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import ExperienceS from "./components/experience/ExperienceS";

// Import Sample Data
import sample_data from "./sample.json";

// Import Personal Data if it exists
let resume_data = sample_data;
const resume_path = "./resume.json";

try {
    resume_data = require(`${resume_path}`);
} catch (error) {
    console.error(`Did not find Custom Resume Data: ${resume_path}`);
}

// Parse Input Json
let parsed_info = resume_data.info.map((row_text, index) => {
    return (
        <p className={`info-row-${index}`} key={index}>
            {row_text}
        </p>
    );
});

function Resume() {
    return (
        <div className="Resume">
            <Header
                name={resume_data.name}
                sub_titles={resume_data.sub_titles}
                info={parsed_info}
            ></Header>
            <Education school_list={resume_data.schools}></Education>
            <Skills skills={resume_data.skills}></Skills>
            <Projects></Projects>
            <ExperienceS experience={resume_data.experience}></ExperienceS>
        </div>
    );
}

export default Resume;
