function Card(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <img
            src={props.img}
            alt="web development course"
            className="card-img"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="cardp">👨‍👩‍👧‍👦25 Students</p>
        </div>
        <div className="col">
          <p className="cardp">⏱ 01h 30m</p>
        </div>
      </div>
      <div className="row">
        <div className="col ancor">
          <a className="card-ancor">
            Web design & development courses for beginner
          </a>
          <hr></hr>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="cardp2">⭐ 4.5(250)</p>
        </div>
        <div className="col">
          <p className="cardp2">$99</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
