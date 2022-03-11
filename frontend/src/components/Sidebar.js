import React from 'react';
import { Link } from "react-router-dom";
import { renderToString } from 'react-dom/server';
import { useLocation } from "react-router-dom"
import Customers from '../pages/Customers';
import { Home, Users, Briefcase, User, Settings, Lock, UserPlus, XCircle } from 'react-feather';

const Sidebar = () => {
  // const isDashboard = false;
  // if (useLocation.pathname == "/") {
  //   isDashboard = true;
  //   console.log(isDashboard)
  // }
  // // const isDashboard = useLocation().pathname('/')
  // console.log(isDashboard)
  let dashboard, customers, products, account, settings;

  // console.log(useLocation().pathname)

  if (useLocation().pathname == "/") {
    dashboard = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-light text-success rounded" to="/">Dashboard</Link>
  } else {
    dashboard = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/">Dashboard</Link>
  }
  
  if (useLocation().pathname == "/customers") {
    customers = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-light text-success rounded" to="/customers">Customers</Link> 
  } else {
    customers = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/customers">Customers</Link>
  }

  if (useLocation().pathname == "/products") {
    products = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-light text-success rounded" to="/products">Products</Link>
  } else {
    products = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/products">Products</Link>
  }

  if (useLocation().pathname == "/account") {
    account = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-light text-success rounded" to="/account">Account</Link>
  } else {
    account = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/account">Account</Link>
  }

  if (useLocation().pathname == "/settings") {
    settings = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-light text-success rounded" to="/settings">Settings</Link>
  } else {
    settings = <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/settings">Settings</Link>
  }

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
      <div className="position-sticky pt-0">
        <ul className="nav flex-column mx-3">

          <div className="card bg-secondary mb-3">
            <div className="card-body">
              <h5 className="card-title h5 text-light">Acme inc</h5>
              <p className="card-text text-dark">Your tier: Premium</p>
            </div>
          </div>
          <div className="border-bottom border-secondary my-3" />
          { dashboard }
          { customers }
          { products }
          { account }
          { settings }
          <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/login">Login</Link>
          <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/register">Register</Link>
          <Link className="list-group-item list-group-item-action list-group-item-light p-2 bg-dark text-light" to="/error">Error</Link>
        </ul>
      </div>
    </nav>


  )
};
export default Sidebar;
