import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from "react-router-dom";

const Register = () => {
  let { register } = useContext(AuthContext)

  return (
    <form className="form-signin" onSubmit={register}>
      <div className="card">
        <div className="card-body">
          <Link to="/">Dashboard</Link>
          <h5 className="h5 mb-3 font-weight-normal">Create a New Account</h5>
          <input type="text" name="username" className="form-control mb-2" placeholder="Username" required />
          <input type="password" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block form-control" type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default Register;
