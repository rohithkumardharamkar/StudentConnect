import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../url'
const Reg = () => 
{
  let [data,setData]=useState({"_id":"","mobile":"","name":"","age":"","gender":"","pwd":"","cpwd":""})
  let [err,setErr]=useState("")
  let nav=useNavigate()
  function fun(e)
  {
    setData({...data,[e.target.name]:e.target.value})
    

  }
  function fun1(e)
  {
    setData({...data,"img":e.target.files[0]})

  }
  function regis()
  {
    
    

    try
    {
      let fd=new FormData()
   
    
    for(let el in data)
    {
      fd.append(el,data[el])
      
      
    }console.log(fd);
   axios.post(`${url}/user/reg`,fd).then((res)=>{
    if(res.data.msg=="Account created")
    {
      nav("/login")
    }
    else
    {
      setErr(res.data.msg)
    }
   })
    }
    catch(err)
    {
    console.log(err);
    
    }

  }
 

  return (
    <div className='lcon'>
      <h1>Register</h1>
        <div className="conreg">
            <input type="text" name="name" value={data.name}  placeholder='Enter your email-id' onChange={fun} required/>
            <input type="text" name="mobile" value={data.mobile}  placeholder='Enter your Mobile Number'   onChange={fun} required/>
            <input type="text" name="_id" value={data._id} placeholder='Enter your user-id enter numeric only'   onChange={fun} required/>
            <input type="number" name="age" value={data.age} placeholder='Enter your Age'   onChange={fun} required/>
            <input type="text" name="pwd" value={data.pwd} placeholder='Enter Password'  onChange={fun}  required/>
            <input type="text" name="cpwd" value={data.cpwd} placeholder='Confirm Password'  onChange={fun} required/>
       
            <select  name="gender" onChange={fun} value={data.gender}>
                
            <option  selected required  >-----Select----</option>
                <option value={data.male}>Male</option>
                <option value={data.female}>Female</option>
            </select>
           

          
            <input type="file" name="img"  required  onChange={fun1}/>
            <button onClick={regis}>Create Account</button>
            <div>{err}</div>
            <Link to="/login" className='aaa'>Already have an Account ?</Link>

        </div>
    </div>
  )
}

export default Reg