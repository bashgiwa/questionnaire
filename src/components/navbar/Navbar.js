import {NavLink} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="title">Questionnaire Generator</span>
      </div>
      <nav className="nav-bar">
        <ul className="menu">
          <li>
            <NavLink to="/">Questions</NavLink>
          </li>
          <li>
            <NavLink to="/answers">Answers</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
