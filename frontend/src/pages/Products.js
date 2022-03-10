import React, { useState, useEffect, useContext } from 'react'

import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CardProducts from "../components/CardProducts";

const Products = () => {
  let [notes, setNotes] = useState([])
  let [products, setProducts] = useState([])
  let api = useAxios()

  useEffect(()=> {
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

  return (
    <div>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

              <h1 className="h2">Products</h1>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
              {products.map(({ description, users }) => (
                <div className="col">
                  <CardProducts content={{
                    name: users,
                    text: description
                  }}
                  />
                </div>
              ))}
            </div>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>

  );
};

export default Products;
