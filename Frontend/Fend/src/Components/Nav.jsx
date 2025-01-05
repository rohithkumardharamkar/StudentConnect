import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'
import Ct from './Ct'
import { url } from '../url'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Nav = () => {
  let obj=useContext(Ct);
  let a=obj.cont.token;
  console.log(obj);
  let u=useSelector((store)=>store.post.items)
  
  
  let n=useNavigate()
  console.log(obj);
  useEffect(()=>
  {

    if(obj.cont.token=='')
      {
        n('/')
      }
  },[])
 

  return (
    <div className='nav'>
     {a!="" &&   <Link to='/home'>Home</Link>}
    {a!="" && <Link to='/add'>Add Post</Link>}
    {a=="" && <Link to='/login'>Login</Link>}
    {a=="" && <Link to='/reg'>Register</Link>}
    {a!="" && <Link to='/profile'>My Profile</Link>}
    {a!="" && <Link to='/chat'>Chat with AI</Link>}
    {a!="" && <Link to='/fav'>Favourites-({u.length})</Link>}
        {a!="" && <Link to='/logout'>LogOut</Link>}


    

    {a!="" && <div><h3>{obj.cont.name}</h3></div>}
    {a!="" && <img src={`${url}/imgs/${obj.cont.img}`} alt='images ' id='profile'></img>}
    
    </div>
  )
}

export default Nav