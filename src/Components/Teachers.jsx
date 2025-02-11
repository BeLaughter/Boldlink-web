import Card2 from "./Card2";
function Teachers() {
  return (
    <div className="pad" id="teacher">
      <h1 className="text-center title">TEACHERS</h1>
      <h2 className="text-center sub-title">Meet Our Teachers</h2>
      <div className="flex-container">
        <div className="flex-item">
          <Card2
            img="https://cdn.pixabay.com/photo/2020/08/18/19/25/teacher-5499177_640.jpg"
            name="MR Yakubu"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909_640.jpg"
            name="MR Dami"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://cdn.pixabay.com/photo/2020/08/18/18/46/chemistry-teacher-5499052_640.jpg"
            name="MR Rashid"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://cdn.pixabay.com/photo/2022/08/11/08/08/student-7378903_640.jpg"
            name="MR TUNDE"
          />
        </div>
      </div>
    </div>
  );
}

export default Teachers;
