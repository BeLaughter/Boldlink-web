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
            <h1 className="dark " id="nav">
              <span className="orange">B</span>OLDLINKS
            </h1>
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="orange me-2"
              size="lg"
            />
            Our office <br></br>472 Lagos Abeokuta Expressway, General Bus-stop,
            Lagos, Nigeria
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="orange me-2"
              size="lg"
            />
            Email Us <br></br>info@boldlinks.com.ng
          </div>
          <div className="col">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="orange me-2"
              size="lg"
            />
            Call Us<br></br>+234 816 275 4001
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header1;
