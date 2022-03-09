import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Settings = () => {
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
    <div>
    <Topbar />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Settings</h1>
    </div>

    <div className="card">
    <div className="card-header">
    <h5 className="h5">Notifications</h5>
    <p className="form-text">Manage the Notifications</p>
    </div>
               <div className="card-body">
               <div className="row">
               <div className="col-sm-4">
               <h5 className="h5">Notifications</h5>
               <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
   <label className="form-check-label">
   Email
   </label>
   </div>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
   <label className="form-check-label">
   Push Notifications
   </label>
   </div>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label">
   Text Message
   </label>
   </div>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label">
   Phone Calls
   </label>
   </div>
   </div>

   <div className="col-sm-4">
   <h5 className="h5">Messages</h5>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label">
   Email
   </label>
   </div>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label">
   Push Notifications
   </label>
   </div>
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
   <label className="form-check-label">
   Phone Calls
   </label>
   </div>
   </div>
   </div>
               </div>
               <div className="card-footer text-end">
               <button type="button" className="btn btn-sm btn-primary">Save</button>
               </div>
             </div>
             <div className="card mt-3 mb-5">
             <div className="card-header">
             <h5 className="h5">Password</h5>
             <p className="form-text">Update Password</p>
             </div>
               <div className="card-body">
               <form>
   <div className="form-group">
   <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Password" />
   </div>
   <div className="form-group pt-2">
   <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Confirm Password" />
   </div>
   </form>
               </div>
               <div className="card-footer text-end">
               <button type="button" className="btn btn-sm btn-primary">Update</button>
               </div>
             </div>

    </main>
    </div>
    </div>
    </div>
  );
};

export default Settings;
