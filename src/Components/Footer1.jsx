function Footer1() {
  return (
    <div className=" footer1">
      <div className="flex-container">
        <div className="flex-item mr50">
          <p className="pfoot">Get In Touch</p>
          <ul className="no-bull">
            <li>
              <a href="#" className="afoot">
                123 General Street, Lagos, Nigeria
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                +234 806 937 4132
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                Boldlinks@gmail.com
              </a>
            </li>
            <li>
              <a href="#">social logos</a>
            </li>
          </ul>
        </div>
        <div className="flex-item mr50">
          <p className="pfoot">OUR COURSES</p>
          <ul className="no-bull ">
            <li>
              <a href="#" className="afoot">
                Web design
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                Apps design
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                marketing
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="afoot">
                SEO
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
