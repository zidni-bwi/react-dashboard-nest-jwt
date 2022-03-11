import React, { useState, useEffect } from 'react'

import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

const Dashboard = () => {
  let [notes, setNotes] = useState([])
  let [products, setProducts] = useState([])
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
    getProducts()
  }, [])

  let getProducts = async () => {
    let responsa = await fetch('http://localhost:8000/api/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'users': 'dummy' })
    });
    const data = await responsa.json();
    setProducts(data)
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
                <div className="card border-0 shadow-sm rounded-0">
                  <div className="card-header bg-light">
                    Lastest Products
                  </div>
                  <ul className="list-group list-group-flush">
                  {products.map(({ _id, name }) => (
                <li className="list-group-item" key={_id}>{ name }</li>
              ))}
                  </ul>
                </div>
              </div>
              <div className="col-sm-8">
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
                  {customers.map(({ _id, order_ref, customer, date, status }) => (
                    <tr key={_id}>
                    <td>{order_ref}</td>
                    <td>{customer}</td>
                    <td>{date}</td>
                    <td>{status}</td>
                  </tr>
                  ))}
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
