import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Customers = () => {
  let [notes, setNotes] = useState([])
  let [customers, setCustomers] = useState([])
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
    getCustomers()
  }, [])

  let getCustomers = async () => {
    let respons = await fetch('http://localhost:8000/api/customers/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'users': 'dummy' })
    });
    const data = await respons.json();
    setCustomers(data)
  }

  return (
    <div>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Customers</h1>
            </div>

            <div className="card border-0 shadow-sm rounded-0">
              <div className="card-header bg-light">
                Lastest Orders
              </div>
              <table className="card-table table">
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">ORDER REF</th>
                    <th scope="col">CUSTOMER</th>
                    <th scope="col">DATE</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(({ id, order_ref, customer, date, status }) => (
                    <tr key={order_ref}>
                    <td>{order_ref}</td>
                    <td>{customer}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Customers;
