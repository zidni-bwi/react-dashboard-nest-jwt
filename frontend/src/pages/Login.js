import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from "react-router-dom";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext)

  return (
    <form className="form-signin" onSubmit={loginUser}>
      <div className="card">
        <div className="card-body">
          <Link to="/">Dashboard</Link>
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
          <label className="sr-only">Username</label>
          <input className="form-control" name="username" type="text" placeholder="Enter Username" required />
          <label className="sr-only">Password</label>
          <input className="form-control" name="password" type="password" placeholder="Enter Password" required />
          <button className="btn btn-lg btn-primary btn-block form-control" type="submit">Sign in</button>
        </div>
      </div>
    </form>
  )
}

export default LoginPage
