import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer1() {
  return (
    <div className=" footer1">
      <div className="flex-container">
        <div className="flex-item mr50">
          <p className="pfoot">Get In Touch</p>
          <ul className="no-bull">
            <li>
              <a href="#" className="afoot">
                472 Lagos Abeokuta Expressway, General Bus-stop, Lagos, Nigeria
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                +234 816 275 4001
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                info@boldlinks.com.ng
              </a>
            </li>
            <li>
              <div className="flex-container bib">
                <div className="flex-item">
                  <FaFacebook className="iconsz" />
                </div>
                <div className="flex-item">
                  <FaInstagram className="iconsz" />
                </div>
                <div className="flex-item">
                  <FaTwitter className="iconsz" />
                </div>
                <div className="flex-item">
                  <FaLinkedin className="iconsz" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-item mr50">
          <p className="pfoot">OUR COURSES</p>
          <ul className="no-bull ">
            <li>
              <a href="#" className="afoot">
                >Web design
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                >Apps design
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                >marketing
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                >Research
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                >SEO
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <p className="pfoot">NEWS LETTER</p>
          <p className="foottext">
            Stay updated with our latest news and trends.
          </p>
          <div className="d-flex">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Email"
            ></input>
            <button className="btn btn-primary bgorange " type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Footer1;
