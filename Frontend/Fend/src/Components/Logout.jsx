import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Logout = () => {
  let navigate=useNavigate()
  let obj=useContext(Ct)

  useEffect(()=>{
    obj.updcont({"_id":"","token":"","name":""})
    navigate("/")
  },[])
  return (
    <div></div>
  )
}

export default Logout