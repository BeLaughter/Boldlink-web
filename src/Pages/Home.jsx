import React from "react";
import "../App.css";
import Bodycarosel from "../Components/Bodycarosel";
import About from "../Components/About";
import Subjects from "../Components/Subjects";
import Courses from "../Components/Courses";
import Signup from "../Components/Signup";
import Teachers from "../Components/Teachers";
import Testimo from "../Components/Testimo";
// import Blog from "./Components/Blog";

const Home = () => {
  return (
    <div>
      <Bodycarosel />
      <About />
      <Subjects />
      <Courses />
      <Signup />
      <Teachers />
      <Testimo />
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
