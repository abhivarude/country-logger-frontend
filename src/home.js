import React, { Component } from "react";
import "./home.css";
import axios from "axios"
import { Container } from "reactstrap";
import {NavLink} from "react-router-dom"



export default class Home extends Component{

constructor(){

    super();
    this.state={
      search:"",
      statedata:"",
      countrydata:[]
    }
   
}

componentDidMount(){

  this.names();
}

names=async()=>{
  
const names=await axios.get("https://country-logger.herokuapp.com//alldata");

this.setState({countrydata: names.data});


this.state.countrydata.map((data)=>{

  console.log(data.Country.LocalizedName)
  let container=document.querySelector(".data2");
  container.style.backgroundColor="#bf9823";
  let ptag=document.createElement("h3");
  
  ptag.innerHTML=data.Country.LocalizedName
  container.append(ptag);

})



}

handlechange=async({target:{name,value}})=>
{
this.setState({[name]:value})

}

// componentDidUpdate()
// {
//   this.getToken();
// }


getToken=async()=>{

  this.setState({statedata:""})

  const dataa=await axios.post('https://country-logger.herokuapp.com/states',{ "Country.LocalizedName": this.state.search})
  

   
this.setState({statedata:dataa.data})


if(this.state.statedata)
{
  this.album(this.state.statedata)
}

}


album=async (data)=>{
  
  let container=document.querySelector(".data1");
  let row=document.createElement("div");
  row.setAttribute("class","row");
  let coloumn=document.createElement("div","col-sm-12 col-md-6 col-lg-3 col-xl-4","pad");
  

  let card=document.createElement("div","card");
  let link=data;
  card.style.backgroundImage = ""
  
  let image=document.createElement("img","card-img-top");
  image.src="logo192.png";
 
  let cardbody=document.createElement("div","card-body");
let title=document.createElement("h3","card-title");
title.innerHTML="Country : "+data.Country.LocalizedName;
title.style.color="red"



let AdministrativeArea=document.createElement("h3","card-title");
AdministrativeArea.innerHTML="AdministrativeArea : "+data.AdministrativeArea.LocalizedName+"</br>"+"Country Id : "+ data.AdministrativeArea.CountryID;

let LocalizedType=document.createElement("h3","card-title");
LocalizedType.innerHTML="LocalizedType : "+data.AdministrativeArea.LocalizedType;

let Region=document.createElement("h3","card-title");
Region.innerHTML="Region : "+data.Region.LocalizedName +"</br>"+"English Name : "+data.Region.EnglishName;


let Regionid=document.createElement("h3","card-title");
Regionid.innerHTML="Region ID : "+data.Region.ID;


let TimeZone=document.createElement("h3","card-title");
TimeZone.innerHTML="TimeZone : "+data.TimeZone.Name  +"</br>"+"GmtOffset :"+data.TimeZone.GmtOffset+  "</br>"+"NextOffsetChange  :"+data.TimeZone.NextOffsetChange ;

let Type=document.createElement("h3","card-title");
Type.innerHTML="Type : "+data.Type;


let Rank=document.createElement("h3","card-title");
Rank.innerHTML="Type : "+data.Rank;


  let h5tag=document.createElement("h3","card-title");
  h5tag.style.color="black";
  h5tag.innerHTML="Lattitude  : "+data.GeoPosition.Latitude  + "<br>"+"Longitude : "+data.GeoPosition.Longitude+"<br>"+" Elevation : "
  +data.GeoPosition.Elevation.Imperial.Value+data.GeoPosition.Elevation.Imperial.Unit+"<br>"+" Metric :"+data.GeoPosition.Elevation.Metric.Value+data.GeoPosition.Elevation.Metric.Unit;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ;
 
 
 let hrtag=document.createElement("hr");
 hrtag.style.color="red";

let IsAlias=document.createElement("h3","card-title");
IsAlias.innerHTML="IsAlias : "+data.IsAlias;

  cardbody.append(title,AdministrativeArea,h5tag,AdministrativeArea,Type,LocalizedType,Region,Regionid,TimeZone,IsAlias,hrtag);
  card.append(cardbody);
  coloumn.append(card);
  row.append(coloumn);
  container.append(row);




}


render(){

    return(<>



 
<div className="navdesign"> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <h1> <NavLink class="navbar-brand" id="logo"to="#">Country Logger</NavLink></h1> 
      <div className="row">
      
      <div className="col">    <NavLink id="button3" class="btn btn-dark" to="/contact">Explore</NavLink></div>
    </div>
    </div>
  
  </nav>

</div>


<div className="bodydesign" style={{      backgroundImage: 'url("map.jpg")',      height: "300px"
    }}>

    
  <div className="container">

    <h2 className="name">Enter Country Name  </h2>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="First letter capital" aria-label="Recipient's username" aria-describedby="button-addon2" name="search" value={this.state.search} onChange={this.handlechange} />
  <button class="btn btn-primary" type="button" id="button-addon2"  onClick={this.getToken}>&#128269; Search</button>
</div>

  </div>

</div>
<div className="container">

<div className="row">
                          <div className="col">
                            
                          <div className="data">
                     \
                        <img src="country.jpg" width="400px" className="flags"></img>
                          </div>
                          </div>

                          <div className="col">

                          <div className="data1">
                            <h3 className="name">Searched Country Data...</h3>
                          </div>
                          </div>

                          <div className="col">
                          <div className="data2">   <h3 className="name">Country names :</h3> </div>
                           
                         </div>

                       
                          </div>

                          </div>
    </>)
}




}
