import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <>
      {/* Background Section */}
      <div
        style={{
          height: "40vh", 
          backgroundImage: "url('/b.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "3rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}>
          Sign In
        </h1>
      </div>

      {/* Form Section */}
      <div className="row mt-4">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="something@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="xxxxxxxxxxx"
              />
            </div>
            <div className="mb-3">
              <div>
                Don't have an account? <Link to="/SignUp">Sign Up here</Link>
              </div>
              <button className="btn btn-primary mt-3">Submit</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export default SignIn;
