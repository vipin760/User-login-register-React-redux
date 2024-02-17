import React, { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux';
import { login } from '../../feature/userSlice';

const Login = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(
      login({
        name:name,email:email,password:password,loggedIn:true
      })
    )
    
  }


  return (
    <div className='login'>
      <form className='login_form' onSubmit={(e)=>handleSubmit(e)}>
        <h1>
            LoginHere
        </h1>
        <input type='text' 
        placeholder='Name' id='name' value={name}
        onChange={(e)=> setName(e.target.value)}
        autoComplete="name"
        />
        <input type='text' placeholder='Email'
        id='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        autoComplete="email"
        />
        <input type='text' placeholder='Password'
        id='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        autoComplete="off"
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}

export default Login
