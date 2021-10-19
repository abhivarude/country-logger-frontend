
import axios from 'axios';
import Nav from './startpage';
import "./auth.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
var login11="";
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


export default function Login (props){



const validate=values=>{
const errors={}

if(!values.email)
{errors.email="* Email is required";}
else if(!validateEmail.test(values.email))
{errors.email="* Enter valid Email id"}


if(!values.password)
{
  errors.password="* password required";
}

return errors;
}



return(<>
<Nav></Nav>

<Formik initialValues={{
  email:"",
  password:""
}}

validate={validate}
onSubmit={async (values)=>{

  const login= await axios.post("https://country-logger.herokuapp.com/loginbody",{email:values.email,password:values.password})
  console.log(login);
 
  if(await login.status===200)
  {
      alert("logged in")
      
login11=values.email;
console.log(login11);
      props.history.push("./dashboard");
}
 
else{
  alert("logged in");
}







}
}

>


{()=>{


return(<div className="all">

<div className="container">
<div className="login">
<div className="row">
  <div className="col">

<div className="loginimage">

<img src="https://res.cloudinary.com/abhiscompany/image/upload/v1634107424/login_tvultt.png" width="500rem"></img>
    </div>
    </div>


    <div className="col">
      
<div className="loginbody">
<Form>
<h3>LOGIN</h3>
<div class="mb-3">  
    <label for="email">Email:</label>
    <Field name="email" type='text'  class="form-control" ></Field>
    <ErrorMessage style="color:red" name="email" />

</div>

<div class="mb-3">  
    <label for="password">Password:</label>
    <Field name="password" type="password"  class="form-control"></Field>
    <ErrorMessage name="password" />

</div>

<div class="mb-3">
<button type="submit" class="btn btn-primary">Login</button>


</div>

</Form>
</div>

      
      </div>
  
  
  </div>

  </div>

  </div>


</div>)
}}




</Formik>



</>)



}