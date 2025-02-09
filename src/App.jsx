import { useState } from "react";
import "./App.css";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Bodycarosel from "./Components/Bodycarosel";
import About from "./Components/About";
import Subjects from "./Components/Subjects";
import Courses from "./Components/Courses";
import Signup from "./Components/Signup";
import Teachers from "./Components/Teachers";
import Testimo from "./Components/Testimo";
import Blog from "./Components/Blog";
import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Bodycarosel />
      <About />
      <Subjects />
      <Courses />
      <Signup />
      <Teachers />
      <div className="b2top">
        <a href="#nav">^</a>
      </div>
      <Testimo />
      <Blog />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
