import "./Header.css";
import u_seal from "./seal-small.svg";

function Header(props) {
    return (
        <header className="Header">
            <div className="header-txt" contentEditable="true">
                <h1 className="name">{props.name}</h1>
                <p className="sub-titles">{props.sub_titles}</p>
                {props.info}
            </div>
            <div className="header-img">
                <img src={u_seal} alt="" />
            </div>
        </header>
    );
}

export default Header;
