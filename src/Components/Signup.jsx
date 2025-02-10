import { useState } from "react";

const Signup = () => {
  const [displaycard, setDisplaycard] = useState(false);
  const [displaycard2, setDisplaycard2] = useState(true);

  const [val, setVal] = useState("");
  const [data, setData] = useState("");

  const [val1, setVal1] = useState("");
  const [data1, setData1] = useState("");

  const [val2, setVal2] = useState("");
  const [data2, setData2] = useState("");

  const change = (e) => {
    setVal(e.target.value);
  };
  const change1 = (e) => {
    setVal1(e.target.value);
  };
  const change2 = (e) => {
    setVal2(e.target.value);
  };

  const click = () => {
    setData(val);
    setVal("");

    setData1(val1);
    setVal1("");

    setData2(val2);
    setVal2("");

    setDisplaycard(true);
    setDisplaycard2(false);
  };
  return (
    <div className="flex-container signup">
      <div className="flex-item text-left">
        <p className="signup1">Need Any Courses</p>
        <h1 className="signh11">30% Off For New Students</h1>
        <p className="signh11">
          Sign up today and get 30% off your first course.Invidunt lorem justo
          sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed
          eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et
          erat ut sed diam sea ipsum est dolor
        </p>
        <ul className="signh11">
          <li>✔Labore eos amet dolor amet diam</li>
          <li>✔Etsea et sit dolor amet ipsum</li>
          <li>✔Diam dolor diam elitripsum vero</li>
        </ul>
      </div>
      {displaycard && (
        <div className="signcard2">
          <h2>NAME: {data}</h2>
          <h3>EMAIL: {data1}</h3>
          <h5>PHONE NO: {data2}</h5>
          <p className="formsuccess"> You have signed up successfully </p>
        </div>
      )}
      {displaycard2 && (
        <div className="flex-item signcard">
          <h1 className="signh1">SIGN UP NOW</h1>
          <div className="signform">
            <input
              type="text"
              placeholder="Name"
              value={val}
              onChange={change}
            />
            <input
              type="email"
              placeholder="Email"
              value={val1}
              onChange={change1}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={val2}
              onChange={change2}
            />
            <br></br>

            <input
              type="button"
              onClick={click}
              className="btnsign"
              value="SUBMIT"
            />
          </div>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
