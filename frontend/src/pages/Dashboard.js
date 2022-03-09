import React, { useState, useEffect } from 'react'

import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

const Dashboard = () => {
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
    <div>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <Card content={{
                  title: "Budget",
                  text: "24k"
                }}
                />
              </div>
              <div className="col-sm-3">
                <Card content={{
                  title: "Total Customers",
                  text: "1.6k"
                }}
                />
              </div>
              <div className="col-sm-3">
                <Card content={{
                  title: "Task Progress",
                  text: "75.5%"
                }}
                />
              </div>
              <div className="col-sm-3">
                <Card content={{
                  title: "Total Profit",
                  text: "$23k"
                }}
                />
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-header">
                    Lastest Products
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Dropbox</li>
                    <li className="list-group-item">Medium Corporation</li>
                    <li className="list-group-item">Slack</li>
                    <li className="list-group-item">Lyft</li>
                    <li className="list-group-item">Github</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-header">
                    Lastest Orders
                  </div>
                  <table className="card-table table">
                    <thead>
                      <tr>
                        <th scope="col">ORDER REF</th>
                        <th scope="col">CUSTOMER</th>
                        <th scope="col">DATE</th>
                        <th scope="col">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>PENDING</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>DELIVERED</td>
                      </tr>
                      <tr>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>REFUNDED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
