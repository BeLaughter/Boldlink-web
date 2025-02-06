import { FaQuoteLeft } from "react-icons/fa";

function Slide(props) {
  return (
    <div className="slide">
      <div className="row">
        <div className="col">
          <h2 className="pbottom">
            <FaQuoteLeft className="orange" />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="cardp2 ">{props.para}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="passport-div">
            <img src={props.img} alt="slide image" className="passport-img" />
          </div>
          <p className="para1">{props.para1}</p>
          <p className="orange ">{props.para2}</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
