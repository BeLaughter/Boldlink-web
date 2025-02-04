function Signup() {
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
      <div className="flex-item signcard">
        <h1 className="signh1">SIGN UP</h1>
        <div className="signform">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <br></br>
          <input type="submit" value="Sign Up Now" />
        </div>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
