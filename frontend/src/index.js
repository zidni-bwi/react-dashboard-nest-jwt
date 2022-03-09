import React, {useContext} from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'

import Account from "./pages/Account";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import AuthContext from './context/AuthContext'
import { settUser } from './actions'

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount(){
  }

  render(){
    return (
        <BrowserRouter>
          <AuthProvider>
          <Switch>
            <PrivateRoute component={Account} path="/account"/>
            <PrivateRoute component={Customers} path="/customers"/>
            <PrivateRoute component={Dashboard} path="/" exact/>
            <PrivateRoute component={Products} path="/products" exact/>
            <PrivateRoute component={Register} path="/register" exact/>
            <PrivateRoute component={Settings} path="/settings" exact/>
            <PrivateRoute component={Error} path="/error" exact/>
            <Route component={Login} path="/login"/>
            <Route component={Error} path='*' />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
    );
  }
}

const RouteWithAuth = connect(null, settUser)(Root)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouteWithAuth />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
