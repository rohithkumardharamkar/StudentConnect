import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  let a=obj.cont.token;
  console.log(obj);
  

  return (
    <div className='nav'>
     {a!="" &&   <Link to='/home'>Home</Link>}
    {a!="" && <Link to='/add'>Add Post</Link>}
    {a=="" && <Link to='/login'>Login</Link>}
    {a=="" && <Link to='/reg'>Register</Link>}
    {a!="" && <Link to='/profile'>My Profile</Link>}
    {a!="" && <Link to='/chat'>Chat with AI</Link>}
    {a!="" && <Link to='/fav'>Favourites</Link>}
        {a!="" && <Link to='/logout'>LogOut</Link>}


    

    {a!="" && <div><h3>{obj.cont.name}</h3></div>}
    {a!="" && <img src={`http://localhost:5000/imgs/${obj.cont.img}`} alt='images ' id='profile'></img>}
    
    </div>
  )
}

export default Nav