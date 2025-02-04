import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
function Header1() {
  return (
    <div className="hiddenonmobile" id="top">
      <div className="container top">
        <div className="row">
          <div className="col">
            <h1 className="dark ">
              <span className="orange">B</span>OLDLINKS
            </h1>
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="orange me-2"
              size="lg"
            />
            Our office <br></br>123 General Street, Lagos, Nigeria
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="orange me-2"
              size="lg"
            />
            Email Us <br></br>Boldlinks@gmail.com
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="orange me-2"
              size="lg"
            />
            Call Us<br></br>+234 806 937 4132
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header1;
