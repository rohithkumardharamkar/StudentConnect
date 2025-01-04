import React, { useContext } from 'react'
import Ct from './Ct'
import { url } from '../url';

const Profile = () => {
  let obj=useContext(Ct)
  console.log(obj);
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