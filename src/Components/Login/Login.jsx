import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Timer} from "../Timer"
function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { setUser } = React.useContext(LoginContext)
    const [count,setCount] =React.useState("4");
    const [less,setLess] =React.useState(true)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        const body = {
            email,
            password
        }
        // console.log(body)
        try {
            let data = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            let response = await data.json();
            // console.log(response)
            
            let token = response.token;
            let email=response.email;
            let password=response.password;
            let wrongPassword=response.wrongPassword;
           
           if(token){
           
            localStorage.setItem('token', token);
            setUser(token)
            if(email){ localStorage.setItem('email', email);}
             
            alert("User logged in successfully")
            navigate("/");
           }else{
            
        
            // if(wrongPassword){
                
                    // localStorage.setItem("wrongPassword", wrongPassword)
                    setCount(c=>c-1)
                //   }
                //   else{
                //     alert("Email or password is incorrect")
                //    }
            //    console.log(count,wrongPassword)
              if(count!=0 && count>=0){
                alert(`you have ${count} attempts`)
              }
              if(count==0 ||  count<0){
                setLess(false)
                alert("you can not login")
              }


        }


           
             
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div  >
             {
                less ?
               <div style={{ width:"300px",margin:"auto",height:"300px",marginTop:"40px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
               <h2 style={{marginTop:"50px"}}>Login</h2>
           <TextField style={{marginTop:"10px"}} id="outlined-basic" label="Email"  type="text" name="Email"  variant="outlined" onChange={(e) => { setEmail(e.target.value) }} />  <br /> <br />
           
       
           <TextField id="outlined-basic" label="Password"  type="password" name="Password"  variant="outlined"value={password} onChange={(e) => { setPassword(e.target.value) }} /><br /><br />

           <Button onClick={handleLogin} type="submit">Login</Button><br />
       
       <Link  style={{marginTop:"10px",textDecoration:"none", color:"GrayText"}} to='/register'>Create An Account</Link>
           </div> : 
           <div><h1>You cannot login</h1><Timer   /></div>
             } 
               
        </div>
    )
}

export default Login;