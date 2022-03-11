import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Account = () => {
  let [notes, setNotes] = useState([])
  let api = useAxios()

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await api.get('/api/notes/')
    if (response.status === 200) {
      setNotes(response.data)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="h1">Error 404</h1>
          <Link className="btn btn-default" to="/">Kembali ke Dashboard</Link>
          <br/>
          <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/755/755014.png"/>
        </div>
      </div>
    </div>
  );
};

export default Account;
