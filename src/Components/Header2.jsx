import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <div className="hiddenonlap mr40">
          <h1 className="dark ">
            <span className="orange">B</span>
            OLDLINKS
          </h1>
        </div>
        <div className="hiddenonmobile">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong className="orange teng hiddenonmobile">
              <FontAwesomeIcon icon={faBookOpen} /> Subjects
            </strong>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Web Design
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                App Design
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Research
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                SEO
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler toggle-top-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="toggler-position">
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <Link
                to="/"
                className="nav-link orange active "
                aria-current="page"
              >
                <li className="nav-item">
                  <strong>Home</strong>
                </li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className="nav-item">
                  <strong>About</strong>
                </li>
              </Link>
              <Link to="/courses" className="nav-link">
                <li className="nav-item">
                  <strong>Courses</strong>
                </li>
              </Link>
              <Link to="/teachers" className="nav-link">
                <li className="nav-item">
                  <strong>Teachers</strong>
                </li>
              </Link>
              <Link to="/contact" className="nav-link">
                <li className="nav-item">
                  <strong>Contact</strong>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" hiddenonmobile">
          <a className=" btn btn-warning bgorange" href="#">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header2;
