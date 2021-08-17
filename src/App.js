import logo from './logo.svg';
import './App.css';
import Sidebar from "./sidebar"
import Topbar from './topbar';
import Dashboard from './dashboard';
import Users from "./users";
import React from "react";
import Product from "./product";
import CreateUser from "./createuser";
import EditUser from "./edituser";
import {UserProvider} from "./usercontext"
import Productcreate from './product-create';
import ProductEdit from './product-edit';
import Myform from './myform';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
          <Switch>
             
              <Route path="/" component={Dashboard} exact={true}/>
              <Route path="/Product" component={Product} exact={true}/>
              <Route path="/Product-create" component={Productcreate} exact={true}/>
              <Route path="/myform" component={Myform} exact={true}/>
              <Route path="/product/edit/:id" component={ProductEdit} exact={true}/>
              
              <UserProvider>
              <Route path="/Users" component={Users} exact={true}/>
              <Route path="/create-user" component={CreateUser} exact={true}/>
              <Route path="/Users/edit/:id" component={EditUser} exact={true}/>
              </UserProvider>
              
              </Switch>
           
              { /* <Dashboard></Dashboard> */}
              {/*<Users></Users>*/}
         
              {/*<Product></Product>*/}
              
             
          
          </div>

        </div>

      </div>
    </div>
    </Router>
  );
}

export default App;
