import React from "react";
import Main from "./mainpage";
import { NavLink } from "react-router-dom";
export default function Nav(){




    return(<>
    
    
<div className="navnew">
<div class="navbar navbar-expand-lg navbar-dark sticky" data-offset="800">
      <div class="container">
        <NavLink to="./mainpage" class="navbar-brand">PLANNERS</NavLink>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
          <span class="ti-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navbar">
          <ul class="navbar-nav ml-auto">
          
         
          </ul>
          <ul class="nav ml-auto">
            <li class="nav-item">
              <NavLink to="./login" class="btn btn-warning">Login</NavLink>
            </li>
            <li>  <div>&nbsp;&nbsp;</div></li>
            <li class="nav-item">
              <NavLink to="./signup" class="btn btn-warning">signup</NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    </div>

    
    </>)
}
