import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Nav from './Components/Nav'
import Login from './Components/Login'
import Reg from './Components/Reg'
import Profile from './Components/Profile'
import Ct from './Components/Ct'
import Logout from './Components/Logout'
import ChatAi from './Components/ChatAi'
import Fav from './Components/Fav'
import { Provider } from 'react-redux'
import store from './utils/store'
const App = () => {


  let [cont,setCon]=useState({"_id":"","token":"","mobile":"","name":"","age":"","gender":"","img":""})
  let updcont=(obj)=>{
    setCon({...cont,...obj})
  }
  let obj={"cont":cont,"updcont":updcont}
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/chat' element={<ChatAi/>}/>
      <Route path='/fav' element={<Fav/>}/>
      
    </Routes>
    </Ct.Provider>
    </Provider>
    </BrowserRouter>
  )
}

export default App

