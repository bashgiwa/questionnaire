import {Link} from "react-router-dom";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={`*`}>Questions</Link>
          </li>
          <li>
            <Link to={`/newQuestion`}>Add a new question</Link>
          </li>
          <li>
            <Link to={`/answers`}>Answers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
