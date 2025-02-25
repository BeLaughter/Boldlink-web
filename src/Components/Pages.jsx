import "../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Pages(props) {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bodypages image-text-container">
      <img
        src="https://media.istockphoto.com/id/1899836013/photo/rear-view-of-a-girl-student-raising-her-hand-to-ask-on-classroom-at-school.webp?b=1&s=612x612&w=0&k=20&c=jtvMQlqeILrU_2hWe1fAcIvHvZazRR6RtIomE9S5hWg="
        alt="pic"
        className=" w-100  pages-img"
      ></img>
      <div className="boxb"></div>
      <div className="text-overlay">
        <h1
          className="caroh5"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          {props.h1}
        </h1>
      </div>
    </div>
  );
}

export default Pages;
