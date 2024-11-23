import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div id="wd-signup-screen" style={{ width: "400px" }}>
      <h1>Sign Up</h1>
      <input
        id="wd-username"
        placeholder="Username"
        type="text"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />
      <input
        id="wd-verify-password"
        placeholder="Verify Password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <Link
        to="/Kanbas/Account/Signin"
      >
        Sign ip
      </Link>
    </div>
  );
};

export default Signup;
