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
              para="It was a tremendous experience as i got to learn the numerous of both Back-end and Front-end development.It wasn't just about the languages and tools covered, it was also about the architecture behind writing code and imbibing the mentality of a software engineer."
              para1="Chigozie Joshua"
              para2="Software Developer at Bluecode"
              img="https://cdn.pixabay.com/photo/2020/08/18/18/46/chemistry-teacher-5499052_640.jpg"
            />
          </div>
          {/* <!-- Second slide --> */}
          <div className="carousel-item2">
            <Slide
              para="At Boldlinks, we weren't just taught programming syntax but we learnt to build. We were instilled with the discipline and the mental fortitude of software engineer,it was an awesome experience. In less than a year of training, I got my first job at Boldlinks as a tutor from where I left to work as a developer in an e-commerce firm."
              para1="Ibrahim Olayioye"
              para2="UI/UX Designer"
              img="https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909_640.jpg"
            />
          </div>
          {/* <!-- Third slide --> */}
          <div className="carousel-item2">
            <Slide
              para="I owe Boldlinks Technology so much because it gave me more than the penny I paid. Today I work as a developer with MYSOL Nigeria Limited where I work with other developers to improve the HRMS application built on LARAVEL FRAMEWORK."
              para1="Aderemi Suliamon"
              para2="Project Manager"
              img="https://cdn.pixabay.com/photo/2022/08/11/08/08/student-7378903_640.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimo;
