import "./home.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  
export default function Contact(){


const validate=values=>{

    const errors={};
    if (!values.name)
    {
        errors.name="name is required";
    }
    else if(values.length)
    {
        errors.name="length of name shoud greter than 10";
    }
    if(!values.email)

    {
        errors.email="email required";
    }

    else if(!validateEmail.test(values.email))
    {
        errors.email="enter correct email";
    }


    if(!values.data)
                    {

                        errors.data="data required";
                    }
    return errors;
}


return(<>

<Formik initialValues={
    {
        name:"",
        email:"",
        data:""
    }

} 

onSubmit={async (values)=>{

const data=await axios.post("https://country-logger.herokuapp.com/login",{name:values.name,email:values.email,data:values.data})
if(data.status===200)
{
    alert("response submitted");
  
}
    
}}
validate={validate}
>


<div className="container">
<div className="explore">
<div className="row">
<div className="col">
  <img src="explore.png"></img>

  <h2> share your data with us... </h2>
</div>
<div className="col">

<Form>

<div className="mb3">
    
<label>Name</label>
<Field name="name" type="text" class="form-control"></Field>
<ErrorMessage name="name"></ErrorMessage>
</div>

<div className="mb3">
<label for="email">Email</label>
    <Field type="email" name="email" class="form-control"></Field>
    <ErrorMessage name="email"></ErrorMessage>
</div>

<div className="mb3">

    <label for="data">Add your information</label>
<Field type="textarea" name="data" class="form-control"></Field>
    <ErrorMessage name="data"></ErrorMessage>
</div>


<div className="mb3">
    
    <button type="submit" className="btn btn-primary">submit</button>
    
     </div>

     </Form>


</div>

</div>

     </div>
     </div>
     </Formik>
   

</>)


    



}

