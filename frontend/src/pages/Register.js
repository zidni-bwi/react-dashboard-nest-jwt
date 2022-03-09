import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import {Link} from "react-router-dom";

const Register = () => {
  let [notes, setNotes] = useState([])
  let api = useAxios()

  useEffect(()=> {
      getNotes()
  }, [])

  let getNotes = async() =>{
      let response = await api.get('/api/notes/')
      if(response.status === 200){
          setNotes(response.data)
      }
  }

  return (
    <form className="form-signin">
    <div className="card">
      <div className="card-body">
      <Link to="/">Dashboard</Link>
      <h5 className="h5 mb-3 font-weight-normal">Create a New Account</h5>
      <input type="email" id="inputEmail" className="form-control mb-2" placeholder="First Name" required />
      <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Last Name" required />
      <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" required />
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <button className="btn btn-lg btn-primary btn-block form-control" type="submit">Sign Up</button>
      </div>
      </div>
    </form>
  );
};

export default Register;
