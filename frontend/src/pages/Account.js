import { createStore } from 'redux'

import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import jwt_decode from 'jwt-decode';

const Account = () => {
  let [notes, setNotes] = useState([])
  let [account, setAccount] = useState([])
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

  useEffect(() => {
    getAccount()
  }, [])

  console.log(jwt_decode(localStorage.getItem('jwt')))

  let getAccount = async () => {
    let respons = await fetch('http://localhost:8000/api/account/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'users': 'dummy' })
    });
    const data = await respons.json();
    setAccount(data)
  }

  return (
    <div>
    <Topbar />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Account</h1>
    </div>

    <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                <center>
                 <img src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png" className="rounded-circle w-25"/>
                  <h5 className="card-title">Nama User</h5>
                  <p className="card-text">Informasi User</p>
                  </center>
                </div>
                <div className="card-footer">
                <center>
    <button className="btn btn-sm fw-bold text-primary">Upload picture</button>
    </center>
  </div>
              </div>
            </div>
            <div className="col-sm-6">

              <div className="card">
              <div className="card-header">
              <p className="fw-bold">Card Header</p>
              </div>
                <div className="card-body">
                <form>
    <div className="row pb-2">
    <div className="col">
    <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Last name" />
    </div>
    </div>
    <div className="row pb-2">
    <div className="col">
    <input type="text" className="form-control" placeholder="Email Address" />
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Last name" />
    </div>
    </div>
    <div className="row pb-2">
    <div className="col">
    <input type="text" className="form-control" placeholder="Country" />
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Select State" />
    </div>
    </div>
    </form>
                </div>
                <div className="card-footer text-end">
                <button type="button" className="btn btn-sm btn-primary">Save Details</button>
                </div>
              </div>
            </div>
            </div>

    </main>
    </div>
    </div>
    </div>

  );
};

export default Account;
