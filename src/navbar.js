import "./home.css";
import {NavLink,useHistory} from "react-router-dom";
import { useState } from "react";
import Home from './home';
import Contact from './contact';

import Cheak from './cheak';
import Dashboard from "./dashboard";
import Login from "./login";
export default function Navbar(props){
 var history= useHistory();
const replace1=()=>{

  
history.replace("./login")


}
return(<div className="navdesign"> 

<div className="navnew">
<div class="navbar navbar-expand-lg navbar-dark sticky" data-offset="800">
      <div class="container">
        <NavLink to="#" class="navbar-brand">Planners</NavLink>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
          <span class="ti-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <NavLink to="./dashboard" class="nav-link" data-animate="scrolling">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="./Cheak" class="nav-link" data-animate="scrolling">Bookings</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="./home" class="nav-link" data-animate="scrolling">Search Data </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="./contact" class="nav-link" data-animate="scrolling"> Details</NavLink>
            </li>
         
          </ul>
          <ul class="nav ml-auto">
            <li class="nav-item">
       
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class="btn btn-danger" onClick={replace1}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

</div>)

}
