function About() {
  return (
    <div className="about">
      <div className="about1">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_1280.jpg"
          alt="Image 3"
          className="d-block w-100"
        ></img>
      </div>
      <div className="about2">
        <span className="abu">About Us </span>
        <h1 className="hbu">Innovative Way To Learn</h1>
        <p>
          Welcome to Boldlinks, where innovation meets education. We are a
          forward-thinking institution dedicated to preparing the next
          generation of technology leaders. Our mission is to provide hands-on,
          industry-relevant training that equips students with the skills they
          need to excel in the ever-evolving tech landscape. At Boldlinks, we
          offer a range of programs in software development, data science,
          cybersecurity, artificial intelligence, and more, taught by
          experienced professionals who are passionate about shaping the future
          of technology. Our curriculum blends practical, real-world experiences
          with foundational knowledge, ensuring that our students are not only
          job-ready but also prepared to drive innovation. With state-of-the-art
          labs, personalized mentorship, and a strong network of industry
          partnerships, we empower students to build a solid foundation in tech
          while fostering creativity and critical thinking.
        </p>
        <a className=" btn btn-warning bgorange" href="#">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default About;
