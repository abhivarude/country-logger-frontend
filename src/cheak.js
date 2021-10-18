
import Navbar from "./navbar";
import "./home.css"
import React,{useEffect,useState,useRef,useContext} from "react";
import axios from "axios";
export default function Cheak(){

const fromRef=useRef();
const toRef=useRef();
const dateRef=useRef();
const [from,setName]=useState();
const [to,setTo]=useState();
const [bookdate,setdate]=useState();
const [trip,settrip]=useState();

const [hotellocation,sethotel]=useState();
const [hotelin,cheakin]=useState();
const [hotelout,cheakout]=useState();


const [option,setOption]=useState("")

    const set=(i)=>{
        if(i==1)
        {
            setOption("profile");
        }
        else{
            
            setOption("edit");
        
        }
        
        }

const flight= async (e)=>{
    e.preventDefault();

    const data=await axios.post("https://country-logger.herokuapp.com/flight",{flightfrom1:from,flightto1:to,bookdate1:bookdate,trip1:trip})
   if(data.status==200){
       alert("we contact you with gretest offers ")
   }
   
   
    setName("") ; setTo("") ; setdate("")  ; settrip("")
   

}

const submithotel= async (e)=>{
    e.preventDefault();

    let hoteldata1={hotellocation,hotelin,hotelout,trip}
    

 
     console.log(`${hotellocation }` +  " to "  +  ` ${hotelin}`,hotelout,trip);
const data=await axios.post("https://country-logger.herokuapp.com/hotel",{hotellocation1:hotellocation,hotelin1:hotelin,hotelout1:hotelout})
if(data.status==200){
    alert("we contact you with gretest offers ")
}
sethotel("");cheakin("");cheakout("");

}


return(
<>
<Navbar></Navbar>
<div className="bookbody">
<div className="container-sm">
<div className="book">

    <div className="row">
<div className="col"> 
<button class="btn btn-dark btn-lg " id="fli" onClick={()=>{set(1)}}>Flights</button>
<br></br>

<button class="btn btn-dark btn-lg " onClick={()=>{set(0)}}>Hotels</button>

</div>
<div className="col">


{
    option==="profile"?
    <div>
    
    <div className="flight">
    
            <h3>Ask for flight plans</h3>
                                                    
                                            <div className="trips">
                                                <div className="row">
    
                                            <div className="col">
                                            <div className="form-check">
                                                
                                                <input type="radio" class="form-check-input" name="option1" value="oneway" onChange={(e)=>settrip(e.target.value)}></input>
                                                <label class="form-check-label">one way</label>
    
                                                </div>
                                            </div>
    
                                            <div className="col">
                                            <div className="form-check">
    
                                            <input type="radio" class="form-check-input" name="option1"  value="RoundTrip" onChange={(e)=>settrip(e.target.value)}></input>
                                                <label class="form-check-label">Round Trip</label>
    
                                            </div>
                                            
                                            </div>
    
                                            <div className="col">
                                                
                                            <div className="form-check">
                                            <input type="radio" class="form-check-input" name="option1" value="multicity"  onChange={(e)=>settrip(e.target.value)}></input>
                                                <label class="form-check-label">Multi City</label>
                                            </div>
    
    
                                            </div>
                                                </div>   
                                            </div>
    
                <div className="destiny">
                    <label><h5>From</h5></label>
                    <input type="text"ref={fromRef} value={from} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Any worldwide city or airport"></input>
    
                    <label><h5>To</h5></label>
                    <input type="text" ref={toRef} value={to} onChange={(e)=>setTo(e.target.value)} class="form-control" placeholder="Any worldwide city or airport"></input>
                    
                </div>
    
    
                    <div className="depart">
    
                        <label><h5>Enter booking date</h5></label>
                        <input type="text" ref={dateRef} value={bookdate} onChange={(e)=>setdate(e.target.value)} placeholder="Enter booking date" class="form-control"></input>
    
                    </div>
    
    
                        <div className="selectage">
    
                        <label className="form-label">Adults</label>
                        <select class="form-select" >
    
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
    
    <button class="btn btn-dark"  onClick={flight}>Submit</button>
    
    </div>
    </div>    :

    <div className="container">
    
    
    <h3>Search Hotels</h3>
    <label className="form-label">Where</label>
    <input type="text" value={hotellocation} onChange={(e)=>{sethotel(e.target.value)}} placeholder="Enter the locality,Landmark,city or hostel" class="form-control"></input>
    
    <label className="form-label">Cheak-in date</label>
    <input type="text" value={hotelin} onChange={(e)=>{cheakin(e.target.value)}} class="form-control"></input>
    
    <label className="form-label">Cheak-out date</label>
    <input type="text" value={hotelout} onChange={(e)=>{cheakout(e.target.value)}}  class="form-control"></input>
    
    
    
    <div >
    
    <label className="form-label">Travelers</label>
                        <select class="form-select">
    
                            <option>1room , 1 adults</option>
                            <option>1room , 2 adults</option>
                            <option>2 room , 4 adults</option>
                            
                            
                        </select>
    
    
    
    </div>
    
    
    <button class="btn btn-dark" onClick={submithotel}>Submit</button>
    
    
    
    
    </div>
    
    
    
    
}

</div>

    </div>
</div>
</div>



</div>
</>
)








}