import React, {useState, useEffect, useContext} from 'react'

import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CardProducts from "../components/CardProducts";

const Products = () => {
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
      <h1 className="h2">Products</h1>
    </div>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
            <div className="col">
              <CardProducts content={{
                name: "Dropbox",
                text: "Dropbox is a file hosting service that offer cloud storage. file syncronization, a personal cloud"
                }}
              />
            </div>
            <div className="col">
              <CardProducts content={{
            name: "Medium",
            text: "Medium is a file hosting service that offer cloud storage. file syncronization, a personal cloud"
          }}
          />
          </div>
          <div className="col">
          <CardProducts content={{
            name: "Slack",
            text: "Slack is a file hosting service that offer cloud storage. file syncronization, a personal cloud"
          }}
          />
          </div>
          <div className="col">
          <CardProducts content={{
            name: "Dropbox",
            text: "Dropbox is a file hosting service that offer cloud storage. file syncronization, a personal cloud"
          }}
          />
          </div>
          <div className="col">
          <CardProducts content={{
            name: "Medium",
            text: "Medium is a file hosting service that offer cloud storage. file syncronization, a personal cloud"
          }}
          />
          </div>
          <div className="col">
          <CardProducts content={{
            name: "Slack",
            text: "Slack is a file hosting service that offer cloud storage. file syncronization, a personal cloud."
          }}
          />
          </div>
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
