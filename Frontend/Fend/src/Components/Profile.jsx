import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { url } from '../url';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let obj=useContext(Ct)
  let n=useNavigate()
  useEffect(()=>
  {

    if(obj.cont.token=='')
      {
        n('/')
      }
  },[])
 
  return (
   <>
    <div className='profile'>
      <img src={`${url}/imgs/${obj.cont.img}`} alt="jjjjj" />
      <h2>user-id: {obj.cont._id}</h2>
      <h1>Name: {obj.cont.name}</h1>
      <h2>Age: {obj.cont.age}</h2>
      <h2>Gender :{obj.cont.gender}</h2>
     
    </div>
   </>
  )
}

export default Profile