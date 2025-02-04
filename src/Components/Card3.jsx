function Card3(props) {
  return (
    <div className="flex-container">
      <div className="flex-item ">
        <div className="image-text-container2">
          <img src={props.img} className="img-fluid sub-img" alt="Image"></img>
          <div className="boxb"></div>
          <div className="text-overlay2 blogp">
            <p className="">{props.text}</p>
            <span className="orange">Jan 28, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
