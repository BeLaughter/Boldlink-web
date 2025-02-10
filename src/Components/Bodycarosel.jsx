import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Bodycarosel() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="simpleCarousel "
      className="carousel slide caro-height"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item imgh active">
          <img
            src="https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q="
            className="d-block w-100"
            alt="Image 1"
          ></img>
          <div className="boxb"></div>
          <div className="carousel-caption capcaro">
            <h5
              className="caroh5"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              Welcome to Boldlinks Technology
            </h5>
            <p className="carop" data-aos="fade-right" data-aos-duration="1000">
              Embark on an exciting journey of learning and innovation <br></br>{" "}
              with our top-notch programming courses
            </p>
            <a
              className=" btn  caroa bgorange "
              data-aos="flip-right"
              data-aos-duration="1000"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item imgh">
          <img
            src="https://media.istockphoto.com/id/1348870264/photo/university-students-in-classroom-after-lecture.jpg?s=612x612&w=0&k=20&c=ZyZMLu8hTQyhN_uQTa8dXbYTm9HFbZT4jk0yOMMTBIk="
            className="d-block w-100"
            alt="Image 2"
          ></img>
          <div className="boxb"></div>
          <div className="carousel-caption capcaro">
            <h5
              className="caroh5"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              Welcome to Boldlinks Technology
            </h5>
            <p className="carop" data-aos="fade-right" data-aos-duration="1000">
              {" "}
              Embark on an exciting journey of learning and innovation <br></br>{" "}
              with our top-notch programming courses
            </p>
            <a
              className=" btn btn-warning caroa bgorange"
              data-aos="flip-right"
              data-aos-duration="1000"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="carousel-item imgh">
          <img
            src="https://media.istockphoto.com/id/1419580307/photo/students-walking-on-the-university-campus.jpg?s=612x612&w=0&k=20&c=DPTfhcehBeiINfFiEIaldBhjqn4Isf8p1d_twUJRVkk="
            className="d-block w-100 "
            alt="Image 3"
          ></img>
          <div className="boxb"></div>
          <div className="carousel-caption  capcaro">
            <h5
              className="caroh5"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              Welcome to Boldlinks Technology
            </h5>
            <p className="carop" data-aos="fade-right" data-aos-duration="1000">
              {" "}
              Embark on an exciting journey of learning and innovation
              <br></br>with our top-notch programming courses
            </p>
            <a
              className=" btn btn-warning caroa bgorange"
              data-aos="flip-right"
              data-aos-duration="1000"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Carousel Controls --> */}
      <button
        className="carousel-control-prev dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button
        className="carousel-control-next dis"
        type="button"
        data-bs-target="#simpleCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Bodycarosel;
