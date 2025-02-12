import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Card2(props) {
  return (
    <div className="card2">
      <div className="row">
        <div className="col imgcon">
          <img
            src={props.img}
            alt="web development course"
            className=" card-img"
          />
          <div className="boxbt">
            <div className="flex-container justify-content-center bib">
              <div className="flex-item">
                <FaWhatsapp className="iconsz" />
              </div>
              <div className="flex-item">
                <FaTwitter className="iconsz" />
              </div>
              <div className="flex-item">
                <FaLinkedin className="iconsz" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="cardp2 text-center">
            {props.name}
            <br></br>INSTRUCTOR
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
