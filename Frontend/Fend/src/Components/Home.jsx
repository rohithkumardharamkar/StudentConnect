import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import { url } from '../url'

const Home = () => {
  let obj=useContext(Ct)
 
  let [r,setR]=useState([])
  let [c,setC]=useState(0);
  
  let nav=useNavigate()
  
  
  useEffect(()=>
  {
    console.log("called");
    
    axios.get(`${url}/post/getpost`).then((res)=>
      {
        setR(res.data)
      },)
    
    
  },[])
  function f1(e)
  {
    console.log("liked",e);
    axios.post(`${url}/post/like`,{"_id":e}).then((res)=>
      {
        console.log("liked");
      })
     
  }
  function f2(e)
  {
    axios.post(`${url}/post/dislike`,{"_id":e}).then((res)=>
      {
        console.log("disliked");
        
     
      })


    
  }
  function f3(e)
  {
    console.log("comment");
    
  }
  
  return (
    <div>
      {
        r.map((item)=>
        {
          return(


            <div className='homecon'>
      <div className='hcon'>
        <div id='a1'>
          <img src={`${url}/imgs/${item.pic}`} alt="" id='a2' />
          <h3>{item.picname}</h3>
        </div>
        <div id='a3'>
          <img src={`${url}/imgs/${item.pimg}`} alt="" />
          
          <p>{item.descp}</p>
       
        </div>
        <div className='a6'>
        <h5>{item.createdAt}</h5>
        <div>{item.likes}</div>

          <button onClick={()=>f1(item._id)}>Like</button>
          {item.dislikes}
          <button onClick={()=>f2(item._id)}>DisLike</button>
          <input type="text"  placeholder='Comment' />
          <button>Post Comment anonymousy</button>
          <button>Show all Comments</button>
        </div>


      </div>

    </div>
          )
        })
      }
    </div>
  )
}

export default Home
