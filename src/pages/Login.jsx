import React from 'react'
import Add from "../img/addavatar.jfif"

const Login = () => {
  return (
    <div className='form-container'>
        <div className='formWrapper'>
            <span className="logo"> &nbsp;&nbsp;&nbsp;Chat Digital
            <span className='monu'>(Monu Chat)</span>
            </span>
            <span className="title">Login</span>
            <form>
                
                <input type="email" placeholder='email' /> <br />
                <input type="password" placeholder='password' /> 
               
                <br />
                <button>Sign in</button>

            </form>
            <p>You don't have an account?Register </p>
        </div>
    </div>
  )
}

export default Login