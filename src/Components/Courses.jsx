import Card from "./Card";
function Courses() {
  return (
    <div>
      <h1 className="text-center title">COURSES</h1>
      <h2 className="text-center sub-title">Our Popular Courses</h2>

      <div>
        <div className="flex-container">
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2019/03/13/17/29/young-man-4053324_640.jpg" />
          </div>
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_640.jpg" />
          </div>
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2023/03/16/16/20/little-girl-7857045_640.jpg" />
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg" />
          </div>
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2017/01/25/05/10/read-2007119_640.jpg" />
          </div>
          <div className="flex-item">
            <Card img="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849819_640.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
