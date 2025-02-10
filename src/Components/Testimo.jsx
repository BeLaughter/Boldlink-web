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
              img="https://media.licdn.com/dms/image/v2/C5603AQGmXYCLqF2yKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615546451997?e=1744243200&v=beta&t=Lm7XbSAvs-g5MlNF531SLvjMVydDE2lxPoqHtBe2XgQ"
            />
          </div>
          {/* <!-- Second slide --> */}
          <div className="carousel-item2">
            <Slide
              para="At Boldlinks, we weren't just taught programming syntax but we learnt to build. We were instilled with the discipline and the mental fortitude of software engineer,it was an awesome experience. In less than a year of training, I got my first job at Boldlinks as a tutor from where I left to work as a developer in an e-commerce firm."
              para1="Ibrahim Olayioye"
              para2="UI/UX Designer"
              img="https://media.licdn.com/dms/image/v2/D4D03AQHxKAHVupO8uA/profile-displayphoto-shrink_800_800/B4DZOdvn1xHMAc-/0/1733518328237?e=1744243200&v=beta&t=UEAo61_nnCbm8uFEaofIzyYVfn-WBc2ORfsRUN21Br4"
            />
          </div>
          {/* <!-- Third slide --> */}
          <div className="carousel-item2">
            <Slide
              para="I owe Boldlinks Technology so much because it gave me more than the penny I paid. Today I work as a developer with MYSOL Nigeria Limited where I work with other developers to improve the HRMS application built on LARAVEL FRAMEWORK."
              para1="Aderemi Suliamon"
              para2="Project Manager"
              img="https://media.licdn.com/dms/image/v2/C5603AQHcMbaFQHfijQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639482328704?e=1744243200&v=beta&t=VXXbQElnWST1ThXFJZXp0_ufsZ-yzNY2-JuVlWsnyiQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimo;
