function Card2(props) {
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
          <p className="cardp2 text-center">{props.name}</p>
          <p className="text-center cardp">WEB DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
