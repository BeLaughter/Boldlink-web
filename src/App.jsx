import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Footer1 from "./Components/Footer1";
import Footer2 from "./Components/Footer2";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About2 from "./Pages/About2";
import Courses from "./Pages/Courses";
import Teachers from "./Pages/Teachers";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header1 />
      <Header2 />

      <div className="b2top">
        <a href="#" onClick={scrollToTop}>
          ^
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About2 />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/teachers" element={<Teachers />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
