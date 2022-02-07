import "./Resume.css";
import Header from "./components/header/Header.js";
import Education from "./components/education/Education";

// import resume_data from "./resume.json";
// Delete these 2 lines and uncomment the line above to use your own json
import sample_data from "./sample.json";
let resume_data = sample_data;

// Parse Input Json
let parsed_info = (resume_data || sample_data).info.map((row_text, index) => {
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
                name={resume_data.name || sample_data.name}
                sub_titles={resume_data.sub_titles || sample_data.sub_titles}
                info={parsed_info}
            ></Header>
            <Education
                school_list={resume_data.schools || sample_data.schools}
            ></Education>
        </div>
    );
}

export default Resume;
