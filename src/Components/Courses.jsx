import Card from "./Card";
function Courses() {
  return (
    <div className="pad" id="course">
      <h1 className="text-center title">COURSES</h1>
      <h2 className="text-center sub-title">Our Popular Courses</h2>

      <div>
        <div className="flex-container">
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2019/03/13/17/29/young-man-4053324_640.jpg"
              a="Web design & development courses for beginners"
            />
          </div>
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_640.jpg"
              a="Web design & development intermidiate courses"
            />
          </div>
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_640.jpg"
              a="Web development advanced courses"
            />
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_640.jpg"
              a="MySQL Training & Administration"
            />
          </div>
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2017/01/25/05/10/read-2007119_640.jpg"
              a="Mongodb ror the Beginners"
            />
          </div>
          <div className="flex-item">
            <Card
              img="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849819_640.jpg"
              a="CSS libaray for the Beginners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
