import Slide from "./Slide";

function Testimo() {
  return (
    <div className="text-center">
      <h1 className="text-center title">TESTIMONIAL</h1>
      <h2 className="text-center sub-title">What Say Our Students</h2>

      <div className="carousel2">
        <div className="carousel-inner2">
          {/* <!-- First slide --> */}
          <div className="carousel-item2">
            <Slide
              para="Attending this programming school was a life-changing experience! The hands-on approach, expert instructors,
         and real-world projects helped me build the skills I needed to kickstart my career in tech. I'm truly grateful for the opportunity!"
              para1=" Benson"
              para2=" Developer"
              img="https://cdn.pixabay.com/photo/2020/08/18/18/46/chemistry-teacher-5499052_640.jpg"
            />
          </div>
          {/* <!-- Second slide --> */}
          <div className="carousel-item2">
            <Slide
              para="Attending this programming school was a life-changing experience! The hands-on approach, expert instructors,
         and real-world projects helped me build the skills I needed to kickstart my career in tech. I'm truly grateful for the opportunity!"
              para1="Lawal"
              para2=" Programer"
              img="https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909_640.jpg"
            />
          </div>
          {/* <!-- Third slide --> */}
          <div className="carousel-item2">
            <Slide
              para="Attending this programming school was a life-changing experience! The hands-on approach, expert instructors,
         and real-world projects helped me build the skills I needed to kickstart my career in tech. I'm truly grateful for the opportunity!"
              para1="Oluyemi"
              para2=" Developer"
              img="https://cdn.pixabay.com/photo/2022/08/11/08/08/student-7378903_640.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimo;
