import React from 'react';
import {Link} from "react-router-dom";
import { renderToString } from 'react-dom/server';

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-0">
        <ul className="nav flex-column">
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/">Dashboard</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/customers">Customers</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/products">Products</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/account">Account</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/settings">Settings</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/login">Login</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/register">Register</Link>
               <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/error">Error</Link>
        </ul>
      </div>
    </nav>


)};
        export default Sidebar;
