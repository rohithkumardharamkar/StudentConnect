import React, { useContext, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { url } from '../url'
const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [err,setErr]=useState("")
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let fun=(e)=>
  {
    setData({...data,[e.target.name]:e.target.value})

  }
  function login()
  {
    if(data.pwd=="" && data._id=="")
    {
      setErr("Please Provide all required details")
    }
    axios.post(`${url}/user/login`,data).then((res)=>
  {
    console.log("login")
    
    if(res.data.token)
    {
      console.log(res.data);
      obj.updcont(res.data)
      navigate("/")

    }
    else
    {
      setErr(res.data.msg)
    }
  }).catch((err)=>
{
  console.log(err);
  setErr("Internal Server Error 404")
})
    
  }
  console.log(data);
  return (
    <div className='lcon'>
      <h1>LOGIN</h1>
        <div className="con">
            <input type="text" name="_id" value={data._id} placeholder='Enter your email-id'  onChange={fun}required/>
            <input type="password" name='pwd' value={data.pwd} placeholder='Enter Password' onChange={fun} required/>
           <h3>{err}</h3>
          
            <button onClick={login}>Login</button>
            <Link to="/reg" className='aaa'>Create Account</Link>

        </div>
    </div>
  )
}

export default Login


