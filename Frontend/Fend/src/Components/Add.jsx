import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
import { url } from '../url'
const Add = () => {
  let [data,setData]=useState({})
  let obj=useContext(Ct)
  let nav=useNavigate()
  data={...data,"pic":obj.cont.img,"picname":obj.cont.name}
  let fun=(e)=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }
  let fun1=(e)=>
  {
    setData({...data,"pimg":e.target.files[0]})
  }
  let add=()=>
  {
    let a=new FormData()
    console.log(a);
    
    for(let i in data)
    {
      a.append(i,data[i])
    }
    console.log(a);
    axios.post(`${url}/post/addpost`,a).then((res)=>
    {
      console.log(res.data);
      nav("/")
    })

  }
    return (
    <div className='lcon'>
      <h1>Add Post</h1>
      <div className='con'>
        <input type="text" placeholder='Enter Title' onChange={fun} name="title" value={data.title}/>
        <input type="textarea" placeholder='Enter Description' onChange={fun} name='descp' value={data.descp}/>
        <input type="file" onChange={fun1}  />
        <button onClick={add}>Add Post</button>
      </div>
    </div>
  )
}

export default Add