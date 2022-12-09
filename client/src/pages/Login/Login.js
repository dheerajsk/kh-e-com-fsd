import "./Login.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();
  const [creds, setCreds]=useState({});
  const [isError, setError]=useState();

  function handleLogin() {
    fetch(
      "http://localhost:4100/api/auth/login",
      {
        method:"POST",
        body:JSON.stringify(creds),
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      }
    ).then(
      res=>{
        if(res.status===200){
          res.json().then(parsedResponse=>{
            console.log(parsedResponse);
            localStorage.setItem("loggedInUser", JSON.stringify(parsedResponse));
            setError();
            navigate("/", {replace: true});
          })

          
        }else if(res.status===400){
          setError(1);
        }
      }).catch(err=>{
        console.log(err);
      });
  }

  return (
    <div className="login-container">
      <h3>Please login.</h3>
      <div className="login-form" >
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input type="email" 
          onInput={(e)=>{creds.email=e.target.value; setCreds(creds)}} 
          className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input type="password"
          onInput={(e)=>{creds.password=e.target.value; setCreds(creds)}} 
           className="form-control" />
        </div>
       {
        isError &&
        <div class="alert alert-danger" role="alert">
          Invalid Credentials
        </div>
       } 
        <button type="button" onClick={handleLogin} className="float-end btn btn-primary">
          Sign In
        </button>

      </div>
    </div>
  );
}

export default Login;
