import React from 'react'
import { LoginContext } from '../Context/LoginContext';

function Homepage() {
  const {user} = React.useContext(LoginContext);
  const email= localStorage.getItem("email")
  console.log(email)
  
  return (
    <div >
       
        <div style={{textDecoration:"none", fontSize:"20px", color:"red",fontWeight:"800",marginTop:"30px"}} className='user-box'>
            {
                user  ? "User login" : "Please Login First"
            }
            {
                email ? <div style={{color:"green"}}> Email : {email}</div> : ""
            }
          
        </div>
    </div>
  )
}

export default Homepage