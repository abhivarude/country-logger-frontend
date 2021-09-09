import logo from './logo.svg';
import './App.css';
import {Redirect,Route,NavLink,BrowserRouter ,Switch} from "react-router-dom"
import Home from './home';
import Contact from './contact';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route  path="/home" component={Home}></Route>
     <Route path="/contact" component={Contact} ></Route>
    
     <Route exact path="/"><Redirect to="/home"></Redirect> </Route>
     </Switch>
    
   
     
     
     </BrowserRouter>




    </div>
  );
}

export default App;
