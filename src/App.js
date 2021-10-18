import logo from './logo.svg';
import './App.css';
import {Redirect,Route,NavLink,BrowserRouter ,Switch} from "react-router-dom"
import Home from './home';
import Contact from './contact';

import Cheak from './cheak';
import Dashboard from "./dashboard";
import Login from './login';
import Signup from './signup';
import Main from './mainpage';
import Nav from './startpage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route  path="/home" component={Home}></Route>

     <Route  path="/mainpage" component={Nav}></Route>
     <Route path="/contact" component={Contact} ></Route>

    <Route path="/cheak" component={Cheak}></Route>
     <Route path="/dashboard" component={Dashboard}></Route>
     <Route path="/login" component={Login}></Route>
     <Route path="/main" component={Main}></Route>
     <Route path="/signup" component={Signup}></Route>
     <Route exact path="/"component={Main} ><Redirect to="/main"></Redirect> </Route>

     </Switch>
    
     </BrowserRouter>




    </div>
  );
}

export default App;
