import React,{useEffect,useState,useRef,useContext} from "react";
import "./home.css";
import Navbar from "./navbar";

export default function Booking(){

const [option,setOption]=useState("profile");


const set=(i)=>{
if(i==1)
{
    setOption("profile")
}
else{
    setOption("edit");
}

}


return(<>

<Navbar/>

<div className="container">
<div className="hotel">
<div className="heading">Book your slots and get better offer</div>


<div className="row">

        <div className="col">
        <button class="btn btn-dark btn-lg " id="fli"> Flight</button>
        <br></br>
        <button class="btn btn-dark btn-lg" >Hotels</button>
        </div>




<div className="col">

<div className="flight">

        <h3>Ask for flight plans</h3>
                                                
                                        <div className="trips">
                                            <div className="row">

                                        <div className="col">
                                        <div className="form-check">
                                            
                                            <input type="radio" class="form-check-input" name="option" value="oneway" ></input>
                                            <label class="form-check-label">one way</label>

                                            </div>
                                        </div>

                                        <div className="col">
                                        <div className="form-check">

                                        <input type="radio" class="form-check-input" name="option"  value="RoundTrip"></input>
                                            <label class="form-check-label">Round Trip</label>

                                        </div>
                                        
                                        </div>

                                        <div className="col">
                                            
                                        <div className="form-check">
                                        <input type="radio" class="form-check-input" name="option" value="multicity"></input>
                                            <label class="form-check-label">Multi City</label>
                                        </div>


                                        </div>
                                            </div>   
                                        </div>

            <div className="destiny">
                <label><h5>From</h5></label>
                <input type="text" class="form-control" placeholder="Any worldwide city or airport"></input>

                <label><h5>To</h5></label>
                <input type="text" class="form-control" placeholder="Any worldwide city or airport"></input>
                
            </div>


                <div className="depart">

                    <label><h5>Enter booking date</h5></label>
                    <input type="text" placeholder="Enter booking date" class="form-control"></input>

                </div>


                    <div className="selectage">

                    <label className="form-label">Adults</label>
                    <select class="form-select">

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>


                    <label className="form-label">Children</label>
                    <select class="form-select">

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        
                    </select>

                    <label className="form-label">infants</label>
                    <select class="form-select">
                        <option>0</option>
                        <option>1</option>
                    
                    </select>


                    </div>

<button class="btn btn-dark">Submit</button>


</div>
</div>
</div>



<div className="container">



<h3>Search Hotels</h3>
<label className="form-label">Where</label>
<input type="text" placeholder="Enter the locality,Landmark,city or hostel" class="form-control"></input>

<label className="form-label">Cheak-in</label>
<input type="text" class="form-control"></input>

<label className="form-label">Cheak-out</label>
<input type="text" class="form-control"></input>



<div >

<label className="form-label">Travelers</label>
                    <select class="form-select">

                        <option>1room , 1 adults</option>
                        <option>1room , 2 adults</option>
                        <option>2 room , 4 adults</option>
                        
                        
                    </select>



</div>


<button class="btn btn-dark">Submit</button>




</div>

</div>



</div>





</>)





}