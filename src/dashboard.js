import {React ,Component} from "react";
import Navbar from "./navbar";
import { ProgressBar, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import  "./home.css";
export default class Dashboard extends Component{

constructor(){

    super();
this.State={asd:""}
}


render(){


// const progressInstance = <ProgressBar now="80" label={`${now}%`} />;
return(<> 

 <Navbar />


 

 <img src="tour.jpg" width="90%" height="800px"></img>
 <div className="att1">
<div className="attraction">
<h2>Travel, food, culture, and budget travel tips</h2>
<h2>INSPIRATION TO HELP YOU PLAN YOUR NEXT ADVENTURE.</h2>


</div>
</div>
<div className="container">
  
<div className="visited">
<h3>Most visited countries in world..</h3>
</div>

<label for="france">France</label>

<ProgressBar name="france" now={90} label={`${90}%`}  />

<label for="france">spain</label>
<ProgressBar now={80} label={`${80}%`}  />

<label for="france">united states</label>
<ProgressBar now={60} label={`${60}%`}  />

<label for="france">china </label>
<ProgressBar now={50} label={`${50}%`}  />
<label for="france">italy </label>
<ProgressBar now={40} label={`${40}%`}  />

<label for="france">turkey</label>
<ProgressBar now={35} label={`${40}%`}  />






</div>



<div className="varity">
<h3>Experience Variety the best way to see world!</h3>

<p>Here at My Tour Planner, we are always in a hustle to turn your vacationing dreams into reality!
   Thinking about touring around India? We've got you covered. With all-round arrangements done with the flick of a finger, your vacationing experience with us is guaranteed to be exciting. Here, your hotel-booking shenanigans, flight securing charades & car renting duties are catered to in one, versatile roof by the hands of seasoned travel experts who strive to make your vacation a 
  memorable one. So why wait? Pick up a destination, sit back at ease and let us fly you towards a paradise, waiting to be explored.</p>
</div>


<h3>Fall In Love With Tour Experiences</h3>
<h4>Adventure, Activities,  Romantic Destinations</h4>
<div className="container">
<div className="imgtour">



<div className="row">

<div className="col">
<img className="imgtouri"  src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_358/v1634047096/amrutsr_zmgrsp.jpg"></img>
<h4>Golden Temple , Amritsar, Punjab</h4>
</div>





<div className="col">
<img className="imgtouri" src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_349/v1634047216/statue_tjoulo.jpg"></img>
<h3>Statue of Liberty ,New York city</h3>
</div>


<div className="col">
<img className="imgtouri"  src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_349/v1634047217/sikkim_gk5tzl.jpg"></img>
<h4>Sikkim, India.</h4>
</div>


<div className="col">
<img className="imgtouri"  src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,h_249,w_349/v1634047217/tower_hjl4t6.jpg"></img>
<h4>Eiffel Tower ,paris ,France</h4>
</div>

<div className="col">

<img className="imgtouri"  src="https://res.cloudinary.com/abhiscompany/image/upload/c_scale,w_349/v1634047216/taj_exidvr.jpg"></img>
<h4>Taj Mahal ,Agra</h4>
</div>
</div>
</div>
</div>


</>)

}



}