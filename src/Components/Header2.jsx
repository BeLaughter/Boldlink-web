import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Header2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-60">
      <div className="container">
        <div className="hiddenonlap mr40">
          <h1 className="dark ">
            <span className="orange">B</span>OLDLINKS
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
              <li className="nav-item">
                <a
                  className="nav-link orange active "
                  aria-current="page"
                  href="#"
                >
                  <strong>Home</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <strong>About</strong>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#course">
                  <strong>Courses</strong>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#teacher">
                  <strong>Teachers</strong>
                </a>
              </li>

              {/* <!-- Dropdown Menu --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>Blog</strong>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog list
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog detail
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <strong>Contact</strong>
                </a>
              </li>
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
