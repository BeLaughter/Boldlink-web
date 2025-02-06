function About() {
  return (
    <div className="flex-container about">
      <div className="flex-item about1">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg"
          alt="Image 3"
          className="d-block w-100"
        ></img>
      </div>
      <div className="flex-item about2">
        <span className="abu">About Us </span>
        <h1 className="hbu">Innovative Way To Learn</h1>
        <p>
          Welcome to Boldlinks, where innovation meets education. We are a
          forward-thinking institution dedicated to preparing the next
          generation of technology leaders. Boldlinks Technology Solutions has
          been transforming lives of young Nigerians with varieties of I.C.T
          Training Programmes, which has seen many participant benefited
          immensely from it in the past and continue to lead by example as the
          hottest I.C.T experts in the areas Software Dev, Database
          Administration, Web Design/Dev, Programming, Mobile Apps Dev, Digital
          Marketing, Graphics Design & Career mentorship in various IT Sectors
          across the Globe/Nation.
        </p>
        <a className=" btn btn-warning bgorange" href="#">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default About;
